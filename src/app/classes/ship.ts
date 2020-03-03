export class Ship {

    private _id: number;
    private _name: string;
    private _model: string;
    private _manufacturer: string;
    private _cost_in_credits: string;
    private _length: string;
    private _max_atmosphering_speed: string;
    private _crew: string;
    private _passengers: string;
    private _cargo_capacity: string;
    private _consumables: string;
    private _hyperdrive_rating: string;
    private _mglt: string;
    private _starship_class: string;


    constructor(id: number, name: string, model: string, manufacturer: string, cost_in_credits: string, 
        length: string, max_atmosphering_speed: string, crew: string, passengers: string, 
        cargo_capacity: string, consumables: string, hyperdrive_rating: string, 
        mglt: string, starship_class: string) {
        this._id = id;
		this._name = name;
		this._model = model;
		this._manufacturer = manufacturer;
		this._cost_in_credits = cost_in_credits;
		this._length = length;
		this._max_atmosphering_speed = max_atmosphering_speed;
		this._crew = crew;
		this._passengers = passengers;
		this._cargo_capacity = cargo_capacity;
		this._consumables = consumables;
		this._hyperdrive_rating = hyperdrive_rating;
		this._mglt = mglt;
		this._starship_class = starship_class;
    }
    

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
    }
    
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this._model;
	}

    /**
     * Getter manufacturer
     * @return {string}
     */
	public get manufacturer(): string {
		return this._manufacturer;
	}

    /**
     * Getter cost_in_credits
     * @return {string}
     */
	public get cost_in_credits(): string {
		return this._cost_in_credits;
	}

    /**
     * Getter length
     * @return {string}
     */
	public get length(): string {
		return this._length;
	}

    /**
     * Getter max_atmosphering_speed
     * @return {string}
     */
	public get max_atmosphering_speed(): string {
		return this._max_atmosphering_speed;
	}

    /**
     * Getter crew
     * @return {string}
     */
	public get crew(): string {
		return this._crew;
	}

    /**
     * Getter passengers
     * @return {string}
     */
	public get passengers(): string {
		return this._passengers;
	}

    /**
     * Getter cargo_capacity
     * @return {string}
     */
	public get cargo_capacity(): string {
		return this._cargo_capacity;
	}

    /**
     * Getter consumables
     * @return {string}
     */
	public get consumables(): string {
		return this._consumables;
	}

    /**
     * Getter hyperdrive_rating
     * @return {string}
     */
	public get hyperdrive_rating(): string {
		return this._hyperdrive_rating;
	}

    /**
     * Getter mglt
     * @return {string}
     */
	public get mglt(): string {
		return this._mglt;
	}

    /**
     * Getter starship_class
     * @return {string}
     */
	public get starship_class(): string {
		return this._starship_class;
    }
    
    /**
     * Getter img
     * @return {string}
     */
	public get img(): string {
          return `https://starwars-visualguide.com/assets/img/starships/${this._id}.jpg`;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
    }
    
    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter model
     * @param {string} value
     */
	public set model(value: string) {
		this._model = value;
	}

    /**
     * Setter manufacturer
     * @param {string} value
     */
	public set manufacturer(value: string) {
		this._manufacturer = value;
	}

    /**
     * Setter cost_in_credits
     * @param {string} value
     */
	public set cost_in_credits(value: string) {
		this._cost_in_credits = value;
	}

    /**
     * Setter length
     * @param {string} value
     */
	public set length(value: string) {
		this._length = value;
	}

    /**
     * Setter max_atmosphering_speed
     * @param {string} value
     */
	public set max_atmosphering_speed(value: string) {
		this._max_atmosphering_speed = value;
	}

    /**
     * Setter crew
     * @param {string} value
     */
	public set crew(value: string) {
		this._crew = value;
	}

    /**
     * Setter passengers
     * @param {string} value
     */
	public set passengers(value: string) {
		this._passengers = value;
	}

    /**
     * Setter cargo_capacity
     * @param {string} value
     */
	public set cargo_capacity(value: string) {
		this._cargo_capacity = value;
	}

    /**
     * Setter consumables
     * @param {string} value
     */
	public set consumables(value: string) {
		this._consumables = value;
	}

    /**
     * Setter hyperdrive_rating
     * @param {string} value
     */
	public set hyperdrive_rating(value: string) {
		this._hyperdrive_rating = value;
	}

    /**
     * Setter mglt
     * @param {string} value
     */
	public set mglt(value: string) {
		this._mglt = value;
	}

    /**
     * Setter starship_class
     * @param {string} value
     */
	public set starship_class(value: string) {
		this._starship_class = value;
	}


}