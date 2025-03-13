type RequestServiceRequest = {
    url: string,
    method: string,
    headers?: any,
    body: any
}

const BACKEND_URL = "http://localhost:8080";

class RequestService {
    
    public async handleRequest(request: RequestServiceRequest): Promise<any> {

        const response = await fetch(BACKEND_URL + request.url, {
            method: request.method,
            headers: request.headers,
            body: request.body
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();

    }
}

const globalForRequestService = global as unknown as { requestService: RequestService };

export const requestService = globalForRequestService.requestService || new RequestService();