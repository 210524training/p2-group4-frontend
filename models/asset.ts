class Asset{
    constructor(assetName:string,asset_tag:string, deviceGroup: deviceGroup, model: string,assignee:string, date_issued:string, date_decomission:string,department:string,typeOS:typeOS, roomumber:string){}
}

export type deviceGroup = 'Computing Device' | 'IO Device';
export type typeOS = 'iOS' | 'Linux' | 'Windows 7' | 'Windows 10' | 'Windows 8';
export type make = 'Dell' | 'HP' | 'Acer';
export default Asset;