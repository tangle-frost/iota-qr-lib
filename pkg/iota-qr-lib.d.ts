/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
export abstract class FactoryBase<T> {
    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    register(name: string, typeConstructor: (...args: any[]) => T): void;
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    unregister(name: string): void;
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    exists(name: string): boolean;
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    types(): string[];
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    create(name: string, ...args: any[]): T;
}

/**
 * Array helper methods.
 */
export class ArrayHelper {
    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    static isArray(value: any): boolean;
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */
    static isTyped(value: any, type: Function): boolean;
}

/**
 * Number helper methods.
 */
export class NumberHelper {
    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    static isInteger(value: any): value is Number;
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    static isNumber(value: any): value is Number;
}

/**
 * Object helper methods.
 */
export class ObjectHelper {
    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */
    static isObject(value: any): value is Object;
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */
    static isType(value: any, typeConstructor: Function): boolean;
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */
    static getClassName(object: any): string;
}

/**
 * Class to maniuplate Strings.
 */
export class StringHelper {
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    static encodeNonASCII(value: string): string;
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */
    static decodeNonASCII(value: string): string;
    /**
     * Check to see if the whole string is ASCII.
     * @param value The value to check.
     * @returns True if all the characters are ascii.
     */
    static isASCII(value: string): boolean;
}

/**
 * Class to manipulate Trytes.
 */
export class TrytesHelper {
    /**
     * All the characters that can be used in trytes.
     */
    static ALPHABET: string;
    /**
     * Convert a string value into trytes.
     * @param ascii The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    static to(ascii: string): string;
    /**
     * Convert trytes into a string value.
     * @param trytes The trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    static from(trytes: string): string;
    /**
     * Check to make sure all the characters in the strin are tryte characters.
     * @param trytes To check for validity.
     * @returns true if the trytes are valid.
     */
    static isTrytes(trytes: string): boolean;
}

/**
 * Class to generates QR codes from data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QR {
    /**
     * Create a new instance of QR.
     * @param typeNumber 1 to 40
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    constructor(typeNumber?: number, errorCorrectLevel?: ErrorCorrectLevel);
    /**
     * Add data to the QR Code.
     * @param qrData The data to add.
     */
    addData(qrData: QRDataBase | string): void;
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */
    generate(): QRCellData;
}

/**
 * QR Data for representing a alpha numeric.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QRAlphaNumeric extends QRDataBase {
    /**
     * Create a new instance of QRAlphaNumeric.
     * @param data The data for the qr alpha numeric.
     */
    constructor(data: string);
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    getLength(): number;
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    write(buffer: BitBuffer): void;
}

/**
 * QR Data for representing a 8 bit data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QRByte8 extends QRDataBase {
    /**
     * Create a new instance of QRByte8.
     * @param data The data for the qr 8 bit data.
     */
    constructor(data: string);
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    getLength(): number;
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    write(buffer: BitBuffer): void;
}

/**
 * QR Data for representing a number.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QRNumber extends QRDataBase {
    /**
     * Create a new instance of QRNumber.
     * @param data The data for the qr number.
     */
    constructor(data: string);
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    getLength(): number;
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    write(buffer: BitBuffer): void;
}

/**
 * Class for maintaining data bits.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class BitBuffer {
    private readonly _buffer;
    private _length;
    constructor();
    getBuffer(): number[];
    getLengthInBits(): number;
    put(num: number, length: number): void;
    putBit(bit: boolean): void;
    toString(): string;
    private getBit;
}

/**
 * Class to helper with math.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class MathHelper {
    /**
     * Initialize the math helper.
     */
    static initialize(): void;
    /**
     * Get the log of the value.
     * @param value The value to get the log of.
     * @returns the log of the value.
     */
    static glog(value: number): number;
    /**
     * Get the exponent of the value.
     * @param value The value to get the exponent of.
     * @returns The exponent of the value.
     */
    static gexp(value: number): number;
}

/**
 * Class to represent a polynomial.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class Polynomial {
    /**
     * Create a new instance of Polynomial.
     * @param num The num of the polynomial.
     * @param shift The shift for the polynomial.
     */
    constructor(num: number[], shift?: number);
    /**
     * The the value of the polynomial at given index.
     * @param index The index.
     * @returns The value of the polynomial.
     */
    getAt(index: number): number;
    /**
     * Get the length of the polynomial.
     * @returns The polynomial.
     */
    getLength(): number;
    /**
     * Convert the polynomial to a string.
     * @returns The string representation of the polynomial.
     */
    toString(): string;
    /**
     * Get the log representation of the polynomial.
     * @returns The log representation of the polynomial.
     */
    toLogString(): string;
    /**
     * Multiply the polynomial with another one.
     * @param e The polynomial to multiply.
     * @returns The multiplication of the polynomials.
     */
    multiply(e: Polynomial): Polynomial;
    /**
     * Get the modulus of the polynomial from another.
     * @param e The polynomial.
     * @returns The modules of the polynomials.
     */
    mod(e: Polynomial): Polynomial;
}

/**
 * Helper methods for QR generation.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QRHelper {
    /**
     * Get the pattern position for the given type number.
     * @param typeNumber The type number to get the pattern for.
     * @returns The pattern for the type number.
     */
    static getPatternPosition(typeNumber: number): number[];
    /**
     * Get the max length of the data.
     * @param typeNumber The type number to get the max length for.
     * @param mode The data mode to get data max length for.
     * @param errorCorrectLevel The error correction to get the max length for.
     * @returns The max length.
     */
    static getMaxLength(typeNumber: number, mode: QRDataMode, errorCorrectLevel: ErrorCorrectLevel): number;
    /**
     * Get the error correction polynomial for the error correcto length.
     * @param errorCorrectLength The error correction length to get the polynomial for.
     * @returns The polynomial for the error correction length.
     */
    static getErrorCorrectPolynomial(errorCorrectLength: number): Polynomial;
    /**
     * Get the mask method for the given pattern.
     * @param maskPattern The pattern to get the mask for.
     * @returns The mask method for the pattern.
     */
    static getMaskMethod(maskPattern: number): (i: number, j: number) => boolean;
    /**
     * Get the BCH type info.
     * @param data The data to get the BCH type info for.
     * @returns The type info.
     */
    static getBCHTypeInfo(data: number): number;
    /**
     * Get the BCH type number.
     * @param data The data to get the BCH type number for.
     * @returns The type number.
     */
    static getBCHTypeNumber(data: number): number;
}

/**
 * Class to represent a RS Block.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class RSBlock {
    private readonly _totalCount;
    private readonly _dataCount;
    /**
     * Create a new insstance of RSBlock.
     * @param totalCount The total count for the block.
     * @param dataCount The data count for the block.
     */
    constructor(totalCount: number, dataCount: number);
    /**
     * Get RS Blocks for the type number and error correct level.
     * @param typeNumber The type number.
     * @param errorCorrectLevel The error correct level.
     * @returns The RS Blocks.
     */
    static getRSBlocks(typeNumber: number, errorCorrectLevel: ErrorCorrectLevel): RSBlock[];
    /**
     * Get the data count.
     * @returns The data count.
     */
    getDataCount(): number;
    /**
     * Get the total count.
     * @returns The total count.
     */
    getTotalCount(): number;
}

/**
 * Definition of type for QR Code Cell data
 */
export type QRCellData = boolean[][];

/**
 * Error correction level to use for the QR Code.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export enum ErrorCorrectLevel {
    /**
     * 7%
     */
    L = 1,
    /**
     * 15%
     */
    M = 0,
    /**
     * 25%
     */
    Q = 3,
    /**
     * 30%
     */
    H = 2
}

/**
 * Mask patterns for QR codes.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export enum MaskPattern {
    /**
     * mask pattern 000
     */
    PATTERN000 = 0,
    /**
     * mask pattern 001
     */
    PATTERN001 = 1,
    /**
     * mask pattern 010
     */
    PATTERN010 = 2,
    /**
     * mask pattern 011
     */
    PATTERN011 = 3,
    /**
     * mask pattern 100
     */
    PATTERN100 = 4,
    /**
     * mask pattern 101
     */
    PATTERN101 = 5,
    /**
     * mask pattern 110
     */
    PATTERN110 = 6,
    /**
     * mask pattern 111
     */
    PATTERN111 = 7
}

/**
 * Base class for storing QR Data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export abstract class QRDataBase {
    /**
     * Create a new instance of QRDataBase.
     * @param mode The mode for the data.
     * @param data The data.
     */
    constructor(mode: QRDataMode, data: string);
    /**
     * Get the data mode.
     * @returns The data mode.
     */
    getMode(): QRDataMode;
    /**
     * Get the data.
     * @returns The data.
     */
    getData(): string;
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    abstract getLength(): number;
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    abstract write(buffer: BitBuffer): void;
    /**
     * Get the length in bits of the data.
     * @param typeNumber The type number to get the length for.
     * @returns The length in bits.
     */
    getLengthInBits(typeNumber: number): number;
}

/**
 * The mode for the qr data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export enum QRDataMode {
    /**
     * number
     */
    number = 1,
    /**
     * alphabet and number
     */
    alphaNumeric = 2,
    /**
     * 8bit byte
     */
    byte8 = 4
}

export function initRender(): void;

/**
 * Factory to generate QR renderers.
 */
export class QRRendererFactory extends FactoryBase<IQRRenderer> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IQRRenderer>;
}

/**
 * JPEG Encoder.
 * Baed on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
 */
export class JPEGEncoder {
    /**
     * Create a new instance of JPEGEncoder.
     */
    constructor();
    /**
     * Encode the image with the given quality.
     * @param width The width of the image to encode.
     * @param height The height of the image to encode.
     * @param imageData The data for the image.
     * @param quality The quality to encode the image at.
     * @returns The data for the encoded image.
     */
    encode(width: number, height: number, imageData: Uint8Array, quality: number): Uint8Array;
}

/**
 * Interface which defines a QR Code Renderer.
 * @interface
 */
export interface IQRRenderer {
    /**
     * Render the cell data with the given dimensions.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The rendered object.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): any;
}

/**
 * Class to render qr data as bitmap.
 */
export class JpegRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: JpegRendererOptions);
    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The bitmap content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array>;
}

/**
 * Options for Jpeg renderer.
 */
export class JpegRendererOptions {
    /**
     * The foreground colour.
     */
    foregroundColour?: number;
    /**
     * The background colour.
     */
    backgroundColour?: number;
}

/**
 * Class to render qr data as canvas.
 */
export class CanvasRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: CanvasRendererOptions);
    /**
     * Render the QR code data as an canvas.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<HTMLCanvasElement>;
}

/**
 * Options for Canvas renderer.
 */
export class CanvasRendererOptions {
    /**
     * The foreground colour.
     */
    foregroundColour?: string;
    /**
     * The background colour.
     */
    backgroundColour?: string;
}

/**
 * Class to render qr data as png.
 */
export class PngRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: PngRendererOptions);
    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The bitmap content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array>;
}

/**
 * Options for Png renderer.
 */
export class PngRendererOptions {
    /**
     * The foreground colour.
     */
    foregroundColour?: number;
    /**
     * The background colour.
     */
    backgroundColour?: number;
}

/**
 * Class to render qr data as svg.
 */
export class SvgRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: SvgRendererOptions);
    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
}

/**
 * Options for Svg renderer.
 */
export class SvgRendererOptions {
    /**
     * The foreground colour.
     */
    foregroundColour?: string;
    /**
     * The background colour.
     */
    backgroundColour?: string;
}

/**
 * Class to render qr data as t3xt.
 */
export class TextRenderer implements IQRRenderer {
    /**
     * Create a new instance of Text renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: TextRendererOptions);
    /**
     * Render the QR code data as text.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The text content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
}

/**
 * Options for Text renderer.
 */
export class TextRendererOptions {
    /**
     * The character to use for on pixels.
     */
    onChar?: string;
    /**
     * The character to use for off pixels.
     */
    offChar?: string;
}

/**
 * Class to helper render data for trinity as QR.
 */
export class Trinity {
    /**
     * Create the QR code data for trinity.
     * @param address The address trytes.
     * @param amount The amount for the transaction.
     * @param tag The tag for the transaction in trytes.
     * @param message The message for the transaction in trytes.
     * @returns The data for the trinity payment.
     */
    static paymentData(address: string, amount?: number, tag?: string, message?: string): ITrinityPayment;
    /**
     * Convert trinity payment data into a QR code.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static paymentQR(paymentData: ITrinityPayment, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<any>;
    /**
     * Convert address data into a QR code.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static addressQR(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<any>;
}

/**
 * Definition of a Trinity payment.
 * @interface
 */
export interface ITrinityPayment {
    address: string;
    amount?: number;
    tag?: string;
    message?: string;
}

