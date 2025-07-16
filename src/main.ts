// cliエントリーポイント

import { Command } from "commander";

const program = new Command();

program.version("1.0.0");

program
    .name("cli api tester")
    .description("cli api tester is a CLI tool for api testing");

program
    .command("test")
    .description("test /api/endpoint")
    .action(() => {
        console.log("test api");
    });
program.parse(process.argv);