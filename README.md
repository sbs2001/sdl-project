# WTH is this ?

  

File Encryptor is a desktop app written in C++ and Node js which allows users to encrypt any file. It uses electron js framework for the GUI, and a command line tool built using C++ , this allows the app to leverage the web technologies and give a modern UI experience and C++ ‘s speed.  

Actually C++ is used  since  the course demands it :) 
  

# Project Architecture:

The architecture of the project can be seen as a combination of 2 components.

  

## The encryptor/decryptor command line tool :
 This is a standalone command line tool which can be used to encrypt files via command line. It has simple API like
    

`encryptor <action> <file_path>` the action can be either “encrypt” or “decrypt” . The “file_path” is the path of the file upon which the action is to be carried on.

  

It uses a simple algorithm to encrypt the file, essentially while encryption it complements the data bitwise. Better algorithms can be used like vigenere cipher, but for simplicity the complement method is used, this is not a cryptography project anyways.

## The GUI 
This is written in node js using the framework electron js. Electron JS is a very popular framework used in building modern desktop apps like microsoft teams, visual studio code, atom, slack etc. Electron JS uses HTML, CSS for describing the GUI.
    

The GUI creates a sub process and calls the command line tool on the arguments provided by the user.

  

# Installation:

  

This is tested to work on Ubuntu 20.04 and should work on any other linux distros.

  

## Set up nodejs and npm

**For Linux and Mac OS:**

  

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