```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant Firewall
	participant WebServer
	
	Attacker->>BotNet: creates multiple devices (BotNet) to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic

	
	Note right of Firewall: detected suspicious activity!
	Firewall->>BotNet: actively trying to block requests