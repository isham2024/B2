# Client side

# The app logo url.
APP_LOGO="https://www.flaticon.com/free-icon/accenture_6128893"
# The name of the app.
APP_NAME="ARCH"
# Summary your app's behavoir and show the users how to use it.
APP_SUMMARY="Stay up-to-date on your firm-specific regulations"
# Example input that shows user how to use the app.
EXAMPLE_INPUT="What is Basel III?"

# Server side

# Required, the API key got from OpenAI (https://platform.openai.com/account/api-keys)
OPENAI_API_KEY="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"
# Optional, the agent server of OpenAI API. Use this when the offical OpenAI API server is unreachable.
OPENAI_API_BASE_URL=""
# Optional, the system message helps set the behavior of the assistant. (Learn more from https://platform.openai.com/docs/guides/chat/introduction)
SYSTEM_MESSAGE="Learn about regulations specific to your firm"
# Optional, the message template to wrap the user inputs, the `{{input}}` string in the template will be replaced by user inputs.
MESSAGE_TEMPLATE="Enter your regulatory requirement"
