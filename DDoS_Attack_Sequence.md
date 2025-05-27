```mermaid
sequenceDiagram
	box Red Attacker & BotNet
	participant Attacker
	participant BotNet
	end

	participant Firewall
	participant WebServer
	
	
	Note over Attacker: creates multiple devices (BotNet)
	Attacker->>BotNet: instructs the Botnet to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic
	Note over WebServer: Users sees "504 Gateway Timeout"

	
	Note over Firewall: detected increase of traffic patterns with abnormal packet sizes!
	Firewall->>BotNet: actively trying to block requests using the devices IP address, is overwhelmed
	
	Note over WebServer: WebServer is now implementing Rate Limiting to prevent another DDOS attack