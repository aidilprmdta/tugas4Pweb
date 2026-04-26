        // 1. Define Entity Models
        class TimelineEvent {
            constructor(year, title, desc) {
                this.year = year;
                this.title = title;
                this.desc = desc;
            }
        }

        class TeamMember {
            constructor(name, role, image) {
                this.name = name;
                this.role = role;
                this.image = image;
            }
        }

        class ServiceOffering {
            constructor(title, desc, features, iconSvg) {
                this.title = title;
                this.desc = desc;
                this.features = features;
                this.iconSvg = iconSvg; // Simple text/emoji for demo, can be actual SVG code
            }
        }

        // 2. Define Data Repository / Service
        class RDODataService {
            getTimeline() {
                return [
                    new TimelineEvent('2019', 'Genesis', 'Small collective of engineers shaping the core DevOps architecture.'),
                    new TimelineEvent('2023', 'IoT Expansion', 'Initiated the first automated hardware and edge deployment.'),
                    new TimelineEvent('2026', 'Neon Pulse', 'Revitalizing the RDO design system and scaled knowledge acquisition.')
                ];
            }

            getTeam() {
                return [
                    new TeamMember('Marcus Thorne', 'PRINCIPAL ORCHESTRATOR', 'https://placehold.co/400x400/162238/ffffff?text=MT'),
                    new TeamMember('Elena Vance', 'LEAD IOT ENGINEER', 'https://placehold.co/400x400/162238/ffffff?text=EV'),
                    new TeamMember('Kenji Sato', 'SYS ARCHITECT', 'https://placehold.co/400x400/162238/ffffff?text=KS'),
                    new TeamMember('Sarah Chen', 'COMMUNITY LEAD', 'https://placehold.co/400x400/162238/ffffff?text=SC')
                ];
            }

            getOfferings() {
                return [
                    new ServiceOffering(
                        'DevOps Mastery', 
                        'Advanced CI/CD pipelines, container orchestration, and site reliability engineering workflows.', 
                        ['Pipeline Orchestration', 'Container Strategy'],
                        '⚙️'
                    ),
                    new ServiceOffering(
                        'IoT Fabrication', 
                        'From sensor deployment to data visualization. Full-stack hardware-to-cloud infrastructure.', 
                        ['Edge Computation', 'Telemetry Networks'],
                        '📟'
                    ),
                    new ServiceOffering(
                        'Software Labs', 
                        'Intensive courses on React, Go, and TypeScript for building enterprise-level systems.', 
                        ['Microservices Arch', 'System Optimization'],
                        '💻'
                    )
                ];
            }
        }

        // 3. Initialize Alpine Component
        document.addEventListener('alpine:init', () => {
            Alpine.data('rdoController', () => {
                const service = new RDODataService();
                
                return {
                    // State variables populated by OOP models
                    timelineData: service.getTimeline(),
                    teamMembers: service.getTeam(),
                    offeringsData: service.getOfferings(),
                    
                    // Methods
                    submitForm() {
                        alert("Pulse Transmitted! (Simulasi pengiriman formulir)");
                    }
                };
            });
        });