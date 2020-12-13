# Installation:

  

This is tested to work on Ubuntu 20.04 and should work on any other linux distros.

## Set up nodejs and npm
   
**For Linux  and Mac OS:**

Install nodejs, npm , find their binaries for linux at https://nodejs.org/en/download/

**For Windows:**

Install WSL and set up nodejs, npm. Find instructions for this at https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2


Now further instructions are common to all platforms (assuming windows users use WSL): 

## Clone the repository : 

To do this, enter the following in your terminal
```
git clone https://github.com/sbs2001/sdl-project.git
cd sdl-project
```

## Build the encryptor-cli binary: 

The project uses `encrytor-cli` which is written in C++. It needs to be compiled to be used. To do this do the following

```
cd encryptor-cli
make
```
Run the tests to ensure `encryptor-cli` is working properly using :
```
./tests.sh
```

Finally return to the project root using
```
cd .. 
```

## Install node dependencies 

Finally install the dependencies using
```
npm install 
```

## Run the project: 

Finally we are here, let's start the damn thing using
```
npm start 
```
Enjoy !