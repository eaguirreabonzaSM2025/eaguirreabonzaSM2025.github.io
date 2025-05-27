```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant Firewall
	participant WebServer
	
	Note over Attacker: creates multiple devices (BotNet)
	Attacker->>BotNet: instructs the Botnet to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic
	Note over WebServer: Users sees "504 Gateway Timeout"

	
	Note over Firewall: detected suspicious activity!
	Firewall->>BotNet: actively trying to block requests, but is overwhelmed
	