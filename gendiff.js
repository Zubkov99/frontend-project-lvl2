#!/usr/bin/env node
import fs from 'fs';
import { Command } from 'commander';
import _ from 'lodash';
import getDifferences from './src/getDifferences.js'

const program = new Command();

program
.version('0.0.1', '-v, --vers', 'output the current version')
.description('Compares two configuration files and shows a difference.', '-h')
.option('-f --format [type]', 'output format')
.arguments('<filepath1> <filepath2>')
.action( (filepath1, filepath2) => {

    const parseIntoObj = (file) => {
        const result = fs.readFileSync(file, (err, data) => {
            if (err) throw err;
            return data;
        });
        return JSON.parse(result);
    }
    
const firstObj = parseIntoObj(filepath1);
const secondObj = parseIntoObj(filepath2);
console.log(getDifferences(firstObj, secondObj));
})

program.parse(process.argv);