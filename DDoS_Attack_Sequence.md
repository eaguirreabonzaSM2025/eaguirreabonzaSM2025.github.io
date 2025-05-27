```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant WebServer
	participant Firewall

	Attacker->>BotNet: creates multiple devices (BotNet) to flood a WebServer
	BotNet->>WebServer: located the WebServer's website, is now there's massive amount of traffic