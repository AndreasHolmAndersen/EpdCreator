interface Material{
    id?: string,
    ownerId: string,
    custom: boolean,
    generic: boolean,
    expectedLifespan: number;
    shortName: string,
    longName: string,
    description: string,  
    link: string[],
    stages: [
      {
        description: string,
        stageTypeValue: number,
        stageStatus: number,
        measures: {
            [key: string]: number

        }
      }
    ],
    declaredUnit: {
      declaredUnit: number,
      declaredValue: number,
      mass: number,
      massUnit: number
    },
    epdInfo?: {
      epdSpecificationForm: number,
      epdProductIndustryType: number,
      issuedAt: string
      validTo: string,
      dateRangeStart: string,
      dateRangeEnd: string,
    }
    tags: string[],
}



export default Material