import fs from "fs";
import path from "path";

// create copy of a file using path
// let readableStream = fs.createReadStream(`${path.resolve()}/src/node/fs/sample.txt`);
// let writableStream = fs.createWriteStream(`${path.resolve()}/src/node/fs/sample_copy.txt`);

// create copy of exisiting file
let readableStream = fs.createReadStream("./src/node/fs/sample.txt");
let writableStream = fs.createWriteStream("./src/node/fs/sample_copy.txt");
readableStream.pipe(writableStream);

// read the file
let readableString = fs.readFile("./src/node/fs/sample.txt", function(err, data){
    if (!err && data) {
        // console.log(data.toString().toUpperCase().indexOf("FAILING"));
    }
});

// check features of writable stream
let writableStreamPlus = fs.createWriteStream("./src/node/fs/writable_stream.txt");

writableStreamPlus.write("line1");
// when end is called finish event will be invoked.
writableStreamPlus.end('This is the end\n');
// writableStreamPlus.on('finish', () => {
//   console.error('All writes are now complete.');
// });
