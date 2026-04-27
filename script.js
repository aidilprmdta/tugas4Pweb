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
        this.iconSvg = iconSvg; 
    }
}

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
            new TeamMember('Marcus Thorne', 'PRINCIPAL ORCHESTRATOR', 'https://placehold.co/400x400/13151f/8a2be2?text=MT'),
            new TeamMember('Elena Vance', 'LEAD IOT ENGINEER', 'https://placehold.co/400x400/13151f/8a2be2?text=EV'),
            new TeamMember('Kenji Sato', 'SYS ARCHITECT', 'https://placehold.co/400x400/13151f/8a2be2?text=KS'),
            new TeamMember('Sarah Chen', 'COMMUNITY LEAD', 'https://placehold.co/400x400/13151f/8a2be2?text=SC')
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

document.addEventListener('alpine:init', () => {
    Alpine.data('rdoController', () => {
        const service = new RDODataService();
        
        return {
            timelineData: service.getTimeline(),
            teamMembers: service.getTeam(),
            offeringsData: service.getOfferings(),
   
            submitForm() {
                alert("Pesan Berhasil Terkirim! Terima kasih telah menghubungi kami.");
            }
        };
    });
});