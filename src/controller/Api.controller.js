class Api {

    static token = localStorage.getItem('token')

    static async loginUser(data) {
        const response = await fetch("https://habits-kenzie.herokuapp.com/api/userLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                localStorage.setItem("userId", JSON.stringify(res.userId))
                localStorage.setItem("token", JSON.stringify(res.token))
                if (res.token) {
                    window.location.href = "caminho página homepage"
                }

                return res
            })
            .catch(err => console.log(err))
    }

    static async updateProfile(profile) {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/user/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(profile),
            }).then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    static async createHabit(data) {
        const response = await fetch("https://habits-kenzie.herokuapp.com/api/habits", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(data),
            }).then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    static async readAll() {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                }
            })
            .then((res) => res.json())
            .catch((err) => console.log(err));

        return response
    }

    static async readByCategory() {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits/category/:habit_category`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            }).then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    static async updateHabit(habit_id) {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits/:habit_id`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(habit_id),
            }).then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    static async completeHabit(habit_id) {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits/complete/:habit_id`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(habit_id),
            }).then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    static async deleteHabit(habit_id) {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits/:habit_id`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => res.json())
            .then((res) => res)
            .catch((err) => console.log(err));
    }
}

export {Api} 