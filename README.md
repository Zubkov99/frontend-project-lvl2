# Gendiff
Gendiff is a utility for comparing Json and Yml/Yaml files. In this project, I trained my skills with objects, recursion, node and tree structure in JS.
____

## Status of tests
[![Actions Status](https://github.com/Zubkov99/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Zubkov99/frontend-project-lvl2/actions)

![example workflow](https://github.com/Zubkov99/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)

[![Maintainability](https://api.codeclimate.com/v1/badges/19679ee975522982034a/maintainability)](https://codeclimate.com/github/Zubkov99/frontend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/19679ee975522982034a/test_coverage)](https://codeclimate.com/github/Zubkov99/frontend-project-lvl2/test_coverage)

____
## How to install a project:
1. Copy the repository 
```bash
git@github.com:Zubkov99/frontend-project-lvl2.git
```
2. Type **make install** and the project is downloaded
```bash
    make install
```

## How to work with the program?
After installation, you can start comparing files. In the terminal, call the gendiff command. After that, write down the relative or absolute path to the first file and to the second.

To get help, call this command in the terminal
```bash
   gendiff -h
```

✅  Comparison of flat json files
[![asciicast](https://asciinema.org/a/n0rSzuOLIL9ovSuivERrLG0z1.svg)](https://asciinema.org/a/n0rSzuOLIL9ovSuivERrLG0z1)

✅ Comparison of flat yml files
[![asciicast](https://asciinema.org/a/cCBGpnZHxYtMybWo4GVY6DQRd.svg)](https://asciinema.org/a/cCBGpnZHxYtMybWo4GVY6DQRd)

✅ This program works with flat and deep files. The examples below show the result of comparing two deep files.

The program outputs the result in three formats: stylish, plain, json.

✅ The result is in the stylish format
[![asciicast](https://asciinema.org/a/8wLZTVkQlHnEzjCGbDGXQm34K.svg)](https://asciinema.org/a/8wLZTVkQlHnEzjCGbDGXQm34K)

✅ The result is in the plain format
[![asciicast](https://asciinema.org/a/xgXm17ji2X5siqK05d9q5Q3ec.svg)](https://asciinema.org/a/xgXm17ji2X5siqK05d9q5Q3ec)

✅ The result is in the json format
[![asciicast](https://asciinema.org/a/bXNTeiMuRw4RuQp49Lk1FjwMn.svg)](https://asciinema.org/a/bXNTeiMuRw4RuQp49Lk1FjwMn)