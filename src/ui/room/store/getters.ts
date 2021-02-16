import { Room } from "src/motel/motel/domain/Room"

export const getters = {
    getRoomInfo: (state, getters, rootState) => (roomId) : Room | null => {
        return rootState.home.rooms.find(room => {
            return room.id === roomId
        })
    }
}