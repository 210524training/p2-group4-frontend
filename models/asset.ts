/* eslint-disable */
export default class Asset {
  constructor(
      public category = 'asset',
      public id: string,
      public assetName: string,
      public asset_tag: string,
      public deviceGroup: deviceGroup,
      public model: string,
      public assignee: string,
      public date_issued: string,
      public date_decomission: string,
      public department: string,
      public typeOS: typeOS,
      public roomumber: string,
  ) {}
}

export type deviceGroup = 'Computing Device' | 'IO Device';
export type typeOS = 'iOS' | 'Linux' | 'Windows 7' | 'Windows 10' | 'Windows 8';
export type make = 'Dell' | 'HP' | 'Acer';
