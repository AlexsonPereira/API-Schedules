export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}

export interface IScheduleRequestBody {
    propertyId: string
    date: string
    hour: string
}