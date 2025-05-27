```mermaid
sequenceDiagram
	box Red Attacker & BotNet Plans
	participant Attacker
	participant BotNet
	end
	box WebService's
	participant Firewall
	participant WebServer
	end
	
	Note over Attacker: creates multiple devices (BotNet)
	Attacker->>BotNet: instructs the Botnet to flood a WebServer
	BotNet->>WebServer: located the WebServer's website there's massive amount of traffic
	Note over WebServer: Users sees "504 Gateway Timeout"

	
	Firewall<<-->>BotNet: detected increase of traffic patterns with abnormal packet sizes!
	Firewall<<->>BotNet: actively trying to block requests using the devices IP address, while BotNet still continues

	Note over Attacker: Notices WebServer is down, achieved their goal
	
	Note over WebServer: WebServer is now implementing "Rate Limiting" to prevent another DDOS attack
	Note over WebServer: CAPTCHA was added