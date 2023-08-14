 const SPOOF = [
    {
        matcher: 'leagues-promotion-vignette-v2-component',
        mixin: (Ember, args) => ({
            // Set this to true to enable spoofing
            spoofingEnabled: false,
            // Set this to true to show the profile icon
            shouldShowProfileIcon: true,
            
            customSummonerName: "PROMOTION DISPLAY NAME",

            // select one from https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/
            // e.g: 1088
            summonerIconId: -9999999,
            // Take care about CORS stuff yourself
            // https://github.com/PenguLoader/PenguLoader/blob/main/INSECURE_OPTIONS.md
            // e.g https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/4599.jpg
            customSummonerIconUrl: "",

            didRender() {
                if(this.get("spoofingEnabled")){
                    if(this.get("customSummonerName")!==""){
                        this.set("labelText",this.get("customSummonerName"))
                    }
                    // For summoner icon, we have 3 priorities:
                    // Priority 1: Custom Summoner Icon
                    // Priority 2: Summoner Icon ID
                    // Priority 3: Default Summoner Icon
                    if(this.get("customSummonerIconUrl")!==""){
                        this.set("profileIconPath",this.get("customSummonerIconUrl"))
                    }
                    else if(this.get("summonerIconId")!=-9999999){
                        this.set("profileIconPath",`/lol-game-data/assets/v1/profile-icons/${this.get("summonerIconId")}.jpg`)

                    }
                }
            }
        })
    }
]   





export const EMBER_COMPONENT_HOOKS = [
    ...SPOOF,

]
