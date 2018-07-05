/**
 * Class to represent a color.
 */
export class Color {
    /**
     * Create a new instance of color.
     * @param alpha The alpha element of the color.
     * @param red The red element of the color.
     * @param green The green element of the color.
     * @param blue The blue element of the color.
     */
    constructor(alpha: number, red: number, green: number, blue: number);
    /**
     * Construct a color from a hex string.
     * @param hex The hex string to parse.
     * @returns The color.
     */
    static fromHex(hex: string): Color;
    /**
     * Get the alpha element.
     * @returns The alpha element.
     */
    alpha(): number;
    /**
     * Get the red element.
     * @returns The red element.
     */
    red(): number;
    /**
     * Get the green element.
     * @returns The green element.
     */
    green(): number;
    /**
     * Get the blue element.
     * @returns The blue element.
     */
    blue(): number;
    /**
     * Get color as argb.
     * @returns The color as argb.
     */
    argb(): number;
    /**
     * Get color as rgba.
     * @returns The color as rgba.
     */
    rgba(): number;
    /**
     * Get color as rgb text.
     * @returns The color as rgb.
     */
    rgbText(): string;
    /**
     * Get color as rgba text.
     * @returns The color as rgba.
     */
    rgbaText(): string;
    /**
     * Get color as hex no alpha.
     * @returns The color as hex with no alpha component.
     */
    hex(): string;
    /**
     * Get color as hex with alpha.
     * @returns The color as hex with with alpha component.
     */
    hexWithAlpha(): string;
}

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
 * String helper methods.
 */
export class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    static isString(value: any): value is string;
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */
    static isASCII(value: string): boolean;
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
     * @param value The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    static to(value: string): string;
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
     * @param typeNumber 0 to 40, 0 means autodetect
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    constructor(typeNumber?: number, errorCorrectLevel?: ErrorCorrectLevel);
    /**
     * Add text data to the QR Code.
     * @param qrData The data to add.
     */
    addText(qrData: string): void;
    /**
     * Add number to the QR Code.
     * @param qrData The data to add.
     */
    addNumber(qrData: string): void;
    /**
     * Add alpha numeric to the QR Code.
     * @param qrData The data to add.
     */
    addAlphaNumeric(qrData: string): void;
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */
    generate(): QRCellData;
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
 * Class to help with manipulating image data.
 */
export class ImageHelper {
    /**
     * Convert the data to an image source.
     * @param mimeType The mime type of the data.
     * @param data The source data.
     * @returns The image source.
     */
    static dataToImageSource(mimeType: string, data: Uint8Array | string): string;
}

/**
 * JPEG Encoder.
 * Based on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
 */
export class JpegEncoder {
    /**
     * Create a new instance of JpegEncoder.
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
 * PNG Encoder.
 * Based on https://github.com/photopea/UPNG.js
 */
export class PngEncoder {
    /**
     * Encode the image frames to png.
     * @param bufs The frame buffers to encode.
     * @param w The image width.
     * @param h The image height.
     * @returns The data for the image.
     */
    encode(bufs: ArrayBuffer[], w: number, h: number): Uint8Array;
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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array | string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Element>;
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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<HTMLImageElement>;
}

/**
 * Options for Jpeg renderer.
 */
export class JpegRendererOptions {
    /**
     * The foreground colour.
     */
    foreground?: Color;
    /**
     * The background colour.
     */
    background?: Color;
    /**
     * The css class to apply for the html element.
     */
    cssClass?: string;
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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array | string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<HTMLCanvasElement>;
}

/**
 * Options for Canvas renderer.
 */
export class CanvasRendererOptions {
    /**
     * The foreground colour.
     */
    foreground?: Color;
    /**
     * The background colour.
     */
    background?: Color;
    /**
     * The css class to apply for the html element.
     */
    cssClass?: string;
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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<HTMLImageElement>;
}

/**
 * Options for Png renderer.
 */
export class PngRendererOptions {
    /**
     * The foreground colour.
     */
    foreground?: Color;
    /**
     * The background colour.
     */
    background?: Color;
    /**
     * The css class to apply for the html element.
     */
    cssClass?: string;
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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<SVGSVGElement>;
}

/**
 * Options for Svg renderer.
 */
export class SvgRendererOptions {
    /**
     * The foreground colour.
     */
    foreground?: Color;
    /**
     * The background colour.
     */
    background?: Color;
    /**
     * The css class to apply for the html element.
     */
    cssClass?: string;
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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Element>;
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
    /**
     * The css class to apply for the html element.
     */
    cssClass?: string;
}

/**
 * Class to helper render addresses as QR.
 */
export class AddressQR {
    /**
     * Convert address data into a QR code raw data.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderRaw(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<string | Uint8Array>;
    /**
     * Convert address data into a QR code html element.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderHtml(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<Element>;
}

/**
 * Class to helper render data for trinity as QR.
 */
export class TrinityPaymentQR {
    /**
     * Create the QR code data for trinity payment data.
     * @param address The address trytes.
     * @param amountIota The amount for the transaction.
     * @param tagTrytes The tag for the transaction in trytes.
     * @param message The message for the transaction in plain text.
     * @returns The data for the trinity payment.
     */
    static generatePaymentData(address: string, amountIota?: number, tagTrytes?: string, message?: string): ITrinityPayment;
    /**
     * Convert trinity payment data into a QR code raw data.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param qrTypeNumber The type number for qr code, controls the amount of data the QR can store.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderRaw(paymentData: ITrinityPayment, rendererType: string, qrTypeNumber?: number, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<string | Uint8Array>;
    /**
     * Convert trinity payment data into a QR code html element.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param qrTypeNumber The type number for qr code, controls the amount of data the QR can store.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderHtml(paymentData: ITrinityPayment, rendererType: string, qrTypeNumber?: number, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<Element>;
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

