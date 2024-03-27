export default class Utils {
    static flagForNationality(nationality: string) { 
        switch (nationality) {
            case "Arabic": return "🇸🇦";
            case "Chinese": return "🇨🇳";
            case "Czech": return "🇨🇿";
            case "Dutch": return "🇳🇱";
            case "English": return "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
            case "French": return "🇫🇷";
            case "German": return "🇩🇪";
            case "Greek": return "🇬🇷";
            case "Irish": return "🇮🇪";
            case "Italian": return "🇮🇹";
            case "Japanese": return "🇯🇵";
            case "Korean": return "🇰🇷";
            case "Polish": return "🇵🇱";
            case "Portuguese": return "🇵🇹";
            case "Russian": return "🇷🇺";
            case "Scottish": return "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
            case "Spanish": return "🇪🇸";
            case "Vietnamese": return "🇻🇳";
            default: return "❓";
        }
    }

    static async getNamePrediction(name: string): Promise<any> {
        let url = "https://hidden-field-5284.ploomberapp.io/" + name;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}