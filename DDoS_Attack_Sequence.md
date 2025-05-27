```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant WebServer
	
	Attacker->>BotNet: creates multiple devices (BotNet) to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic

	participant Firewall
	Note right of Firewall: detected suspicious activity!