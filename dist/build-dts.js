var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function buildDts(imports, sourceIndex, outputFilename) {
    let finalContent = "";
    if (imports && imports.length > 0) {
        imports.forEach(im => {
            finalContent += `${im}\n`;
        });
        finalContent += `\n`;
    }
    const sources = [];
    const sourceScript = fs.readFileSync(sourceIndex).toString();
    const sourceExports = sourceScript.match(/export \* from \"(.*)\";/g);
    for (let i = 0; i < sourceExports.length; i++) {
        sources.push(/export \* from \"(.*)\";/g.exec(sourceExports[i])[1]);
    }
    console.log("Sources", sources);
    for (let i = 0; i < sources.length; i++) {
        const moduleDistPath = path.join("./node_modules/", sources[i], "dist");
        console.log(`Merging ${moduleDistPath}`);
        const indexFile = fs.readFileSync(path.join(moduleDistPath, "index.d.ts")).toString();
        const exports = indexFile.match(/export \* from \"(.*)\";/g);
        for (let i = 0; i < exports.length; i++) {
            const fname = /export \* from \"(.*)\";/g.exec(exports[i])[1] + ".d.ts";
            console.log(`\t${path.join(moduleDistPath, fname)}`);
            const lines = fs.readFileSync(path.join(moduleDistPath, fname)).toString().split("\n");
            lines.forEach(line => {
                if (!line.startsWith("import") && !line.startsWith("/// <reference")) {
                    line = line.replace("export declare", "export");
                    finalContent += `${line}\n`;
                }
            });
        }
    }
    fs.writeFileSync(outputFilename, finalContent);
}
exports.buildDts = buildDts;
buildDts([], "./src/index-all.ts", "./pkg/iota-qr-lib.d.ts");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2J1aWxkLWR0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFFdEIsS0FBSyxVQUFVLFFBQVEsQ0FBQyxPQUFpQixFQUFFLFdBQW1CLEVBQUUsY0FBc0I7SUFDekYsSUFBSSxZQUFZLEdBQVcsRUFBRSxDQUFDO0lBRTlCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakIsWUFBWSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZLElBQUksSUFBSSxDQUFDO0tBQ3hCO0lBRUQsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO0lBQzdCLE1BQU0sWUFBWSxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckUsTUFBTSxhQUFhLEdBQXFCLFlBQVksQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV4RixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFaEMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0MsTUFBTSxjQUFjLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFekMsTUFBTSxTQUFTLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlGLE1BQU0sT0FBTyxHQUFxQixTQUFTLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFL0UsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsTUFBTSxLQUFLLEdBQVcsMkJBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJELE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQ2xFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxZQUFZLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztpQkFDL0I7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFFRCxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBNUNELDRCQTRDQztBQUVELFFBQVEsQ0FDSixFQUNDLEVBQ0Qsb0JBQW9CLEVBQ3BCLHdCQUF3QixDQUMzQixDQUFDIn0=