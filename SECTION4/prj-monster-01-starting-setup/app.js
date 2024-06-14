function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            healCunter: 2,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyle() {
            return { width: Math.max(this.playerHealth, 0) + '%' };
        },
        shouldDisableSuperAttack() {
            return this.currentRound === 0 || this.currentRound % 3 !== 0;
        },
        healShots() {
            return this.healCunter === 0;
        },
    },
    watch: {
        playerHealth(value) {
            if (value === 0 && this.monsterHealth === 0) {
                this.winner = 'draw';
                // this.addLogMsg("Player VS", " Monstar:", " Draw!" )
            } else if (value > this.monsterHealth && this.monsterHealth === 0) {
                this.winner = 'player';
                // this.addLogMsg("Player ", "Won", " the fight!" )
            } else if (value === 0 && this.monsterHealth > value) {
                this.winner = 'monster';
                // this.addLogMsg("Player ", "Lost", " the fight!" )
            }
        },
        logMessages: {
            // A handler function in a watcher is the method that gets called whenever the watched property changes.
            // The deep: true option ensures that nested changes within the logMessages array are tracked.
            
            handler(newLogMessages) {
                if (newLogMessages.length > 14) {
                    this.logMessages.splice(14);
                }
            },
            deep: true,
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.healCunter = 2;
            this.winner = null;
            this.logMessages = [];
        },
        attachMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.attachPlayer();
            this.addLogMsg("player", "attack", attackValue);
            console.log("monsterHealth: ", this.monsterHealth);
            console.log("Current Round:", this.currentRound);
        },
        attachPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
            console.log("playerHealth: ", this.playerHealth);
            this.addLogMsg("monster", "attack", attackValue);
        },
        specialAttachMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 18);
            this.monsterHealth -= attackValue;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.attachPlayer();
            this.addLogMsg("player", "special-attack", attackValue);
            console.log("Current Round:", this.currentRound);
        },
        healPlayer() {
            const healValue = getRandomValue(20, 15);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
                this.attachPlayer();
            } else {
                this.playerHealth += healValue;
                this.attachPlayer();
            }
            this.addLogMsg("player", "heal", healValue);
            this.healCunter--;
            console.log("From HEAL btn playerHealth: ", this.playerHealth);
        },
        surrender() {
            this.winner = 'monster';
            this.addLogMsg("player", "surrender", "Monster Won");
        },
        addLogMsg(who, what, value) {
            // Add the new log message to the beginning of the array
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });

            console.log("logMessagesLength: ", this.logMessages.length);
        }
    }
});

app.mount("#game");

