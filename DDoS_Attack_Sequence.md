```mermaid
sequenceDiagram
	participant Attacker
	participant BotNet
	participant WebServer
	participant Firewall

	Attacker->>BotNet: Create multiple requests to send to a webserver