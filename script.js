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
            new TeamMember('Pohan Asshidiqi', 'Head RDO (Riau DevOps)', 'https://placehold.co/400x400/13151f/8a2be2?text=AP'),
            new TeamMember('Aidil Pramadita Putra', 'Vice Head Of Software Development', 'https://placehold.co/400x400/13151f/8a2be2?text=APP'),
            new TeamMember('Assyaj Abdul Qais', 'Vice Head Of IoT Development', 'https://placehold.co/400x400/13151f/8a2be2?text=AAQ'),
        ];
    }

    getOfferings() {
        return [
            new ServiceOffering(
                'DevOps Mastery', 
                'Mempelajari seputar DevOps dan membuat sistem berbasis perangkat keras.', 
                ['CI/CD Pipelines', 'Container Orchestration', 'Cloud Computing'],
                '⚙️'
            ),
            new ServiceOffering(
                'IoT Fabrication', 
                'Mempelajari seputar Internet of Things dan membuat sistem berbasis perangkat keras.', 
                ['Edge Computation', 'Telemetry Networks', 'System Optimization'],
                '📟'
            ),
            new ServiceOffering(
                'Software Labs', 
                'Mempelajari seputar Pemrograman dan membuat sistem berbasis perangkat lunak.', 
                ['Web Development', 'System Optimization', 'Mobile Development'],
                '💻'
            ),
            new ServiceOffering(
                'UI/UX Design', 
                'Mempelajari seputar UI/UX Design dan membuat tampilan yang menarik dan mudah digunakan.', 
                ['Figma', 'Adobe XD', 'Prototyping'],
                '🎨'
            ),
            new ServiceOffering(
                'Cloud Computing', 
                'Mempelajari seputar Cloud Computing dan membuat sistem berbasis cloud.', 
                ['Cloud Architecture', 'Server Management', 'System Optimization'],
                '☁️'
            ),
            new ServiceOffering(
                'Database System', 
                'Mempelajari seputar Database System dan membuat sistem berbasis database.', 
                ['Database Architecture', 'Database Management', 'System Optimization'],
                '🗄️'
            ),
            new ServiceOffering(
                'AI/ML Development', 
                'Mempelajari seputar AI/ML Development dan membuat sistem berbasis kecerdasan buatan.', 
                ['AI Architecture', 'ML Development', 'System Optimization'],
                '🤖'
            ),
            new ServiceOffering(
                'Data Science', 
                'Mempelajari seputar Data Science dan membuat sistem berbasis data.', 
                ['Data Architecture', 'Data Management', 'System Optimization'],
                '📊'
            ),
            
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