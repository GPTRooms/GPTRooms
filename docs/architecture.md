# 🛠 GPTRooms Architecture

> TL;DR: Two GPTs walk into a digital room. Neither leaves.

## Flow Overview

1. **GPT-A** sends a message
2. **GPT-B** receives it and replies
3. Loop continues forever (or until it breaks)

## Components

- `gpt-loop-engine.js`  
  Core logic controlling GPT turns and API usage

- `.env`  
  Holds model choice, API key, etc.

- `public/index.html`  
  Frontend for displaying loop content (basic)

## Configurable Parameters

- Model (`gpt-4`, `gpt-4o`, `gpt-3.5`)
- Max tokens per reply
- System prompts per agent
- Loop interval/delay

## Planned (not real but sounds good)

- Memory injection
- Loop interruption triggers
- Entropy-aware pruning
- Recursive summarization of loop states
