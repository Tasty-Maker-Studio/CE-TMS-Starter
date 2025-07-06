import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock Claude API
  http.post('https://api.anthropic.com/v1/messages', () => {
    return HttpResponse.json({
      id: 'msg_test123',
      type: 'message',
      role: 'assistant',
      content: [
        {
          type: 'text',
          text: 'This is a mock response from Claude API',
        },
      ],
      model: 'claude-3-sonnet-20240229',
      stop_reason: 'end_turn',
      stop_sequence: null,
      usage: {
        input_tokens: 10,
        output_tokens: 25,
      },
    })
  }),

  // Mock Pinecone API
  http.post('https://api.pinecone.io/v1/indexes/*/vectors/upsert', () => {
    return HttpResponse.json({
      upsertedCount: 1,
    })
  }),

  http.post('https://api.pinecone.io/v1/indexes/*/vectors/query', () => {
    return HttpResponse.json({
      matches: [
        {
          id: 'test-vector-1',
          score: 0.9,
          metadata: {
            text: 'This is a test vector',
            timestamp: '2023-01-01T00:00:00Z',
          },
        },
      ],
    })
  }),

  // Mock LangChain/OpenAI API
  http.post('https://api.openai.com/v1/chat/completions', () => {
    return HttpResponse.json({
      id: 'chatcmpl-test123',
      object: 'chat.completion',
      created: 1677652288,
      model: 'gpt-3.5-turbo',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content: 'This is a mock response from OpenAI API',
          },
          finish_reason: 'stop',
        },
      ],
      usage: {
        prompt_tokens: 9,
        completion_tokens: 12,
        total_tokens: 21,
      },
    })
  }),
]