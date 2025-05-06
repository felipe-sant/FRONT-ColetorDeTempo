import getRequest from "../functions/connection/getRequest";
import formatDate from "../functions/utils/formatDate";

class BackendConnection {
    private static url = 'https://coletor-de-tempo.vercel.app/api/';

    public static async getDataDaily(day?: Date): Promise<any> {
        try {
            if (!day) { day = new Date() }
            const query = { day: formatDate(day) }
            const response = await getRequest(`${BackendConnection.url}daily`, query);
            return response;
        } catch (error) {
            console.error("Error fetching daily temperature:", error);
            return false;
        }
    }
}

export default BackendConnection;