```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant WebServer
	
	Attacker->>BotNet: creates multiple devices (BotNet) to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic

	participant Firewall
	Firewall->>BotNet: detected suspious activity is actively blocking the requests from the BotNet