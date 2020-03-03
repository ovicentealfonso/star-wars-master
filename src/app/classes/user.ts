export class User {

    private _firstName: string;
    private _lastName: string;
    private _userName: string;
    private _password: string;
    private _id: number;


	constructor(firstName: string, lastName: string, userName: string, password: string, id: number) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._userName = userName;
		this._password = password;
		this._id = id;
	}
    

    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Getter userName
     * @return {string}
     */
	public get userName(): string {
		return this._userName;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}

    /**
     * Setter userName
     * @param {string} value
     */
	public set userName(value: string) {
		this._userName = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

}