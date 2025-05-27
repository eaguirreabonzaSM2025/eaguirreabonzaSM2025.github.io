```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant WebServer
	participant Firewall
	Attacker->>BotNet: creates multiple devices (BotNet) to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic
	BotNet<<-Firewall: detected suspious activity is actively blocking the requests from the BotNet