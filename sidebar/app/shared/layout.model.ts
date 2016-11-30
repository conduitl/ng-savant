export class ColumnSetting {
    primaryKey: string;
    header?: string;
    format?: string;
    alternativeKeys?: string[];
}
export class ColumnMap {
    primaryKey: string;
    private _header: string;
    private _format: string;
    alternativeKeys?: string[];
constructor ( settings ) {
        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
    }
    set header(setting: string) {
        this._header = setting ? 
            setting :
            this.primaryKey.slice(0, 1).toUpperCase() + 
                this.primaryKey.replace(/_/g, ' ' ).slice(1)
    }
    get header() {
        return this._header;
    }
    set format(setting: string) {
        this._format = setting ? setting : 'default';
    }
    get format() {
        return this._format;
    }
access = function ( object: any ) {
        if (object[this.primaryKey] || !this.alternativeKeys) {
            return this.primaryKey;
        }
        for (let key of this.alternativeKeys) { 
            if (object[key]) {
                return key;
            }
        }
        return this.primaryKey;
    }
}