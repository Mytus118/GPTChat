# Personal ChatGPT

This project is a personal ChatGPT-like interface that uses the OpenAI API. It's designed to run on a local machine or a Raspberry Pi and provides a web-based chat interface similar to ChatGPT.

## Features

- Web-based chat interface
- Integration with OpenAI's GPT model
- Conversation history sidebar
- Dark theme UI

## Prerequisites

- Python 3.7+
- OpenAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/personal-chatgpt.git
   cd personal-chatgpt
   ```

2. Set up a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     .\venv\Scripts\activate
     ```
   - On macOS or Linux:
     ```
     source venv/bin/activate
     ```

4. Install required packages:
   ```
   pip install flask openai python-dotenv
   ```

5. Create a `.env` file in the project root and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Usage

1. Activate the virtual environment (if not already activated)

2. Run the Flask application:
   ```
   python app.py
   ```

3. Open a web browser and navigate to `http://localhost:5000`

## Project Structure

```
personal-chatgpt/
├── app.py
├── .env
├── templates/
│   └── index.html
├── static/
│   ├── styles.css
│   └── script.js
└── README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

- OpenAI for providing the GPT API
- Flask framework for the web application