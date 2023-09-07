// IMPORTANT Need to write a title ...RSPT (response types)

export interface ResponseErrorsRSPT {
  [key: string]: string;
}

export interface GetDriversReqRSPT {
  data: {
    MRData: {
      DriverTable: {
        Drivers: DriversRSPT[];
      };
    };
  };
}

export interface DriversRSPT {
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  url: string;
  isFavorite?: boolean;
}
