import axios from 'axios';

type RequestServiceRequest = {
    url: string,
    method: string,
    headers?: any,
    body?: any
}

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || 'http://localhost:8080'

class RequestService {
    
    public async handleRequest(request: RequestServiceRequest): Promise<any> {

        const response = await axios.request({
            url: BACKEND_URL + request.url,
            method: request.method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                ...request.headers
            },
            data: request.body,
            validateStatus: (status) => status >= 200 && status < 300 // default
        }).catch((error) => {
            console.error('Error during request:', error);
            throw error;
        })

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data;

    }
}

const globalForRequestService = global as unknown as { requestService: RequestService };

export const requestService = globalForRequestService.requestService || new RequestService();