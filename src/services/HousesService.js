import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class HousesService {
    async getHouses() {
        const res = await api.get('/api/houses')
        logger.log('fetched', res.data)
        AppState.houses = res.data.map(house => new House(house))
        logger.log(AppState.houses)
    }

    async getHouseById(houseId) {
        const res = await api.get(`/api/houses/${houseId}`)
        AppState.activeHouse = new House(res.data)
    }
}

export const housesService = new HousesService