// Authored by: Shivam Sandbhor 
#include <iostream> 
#include <fstream> 
#include <stdlib.h>
#include "CLI.h"
using namespace std;

void encrypt(string file_path)
{
    ifstream file_read_stream(file_path); 
    ofstream encrypted_file_write_stream(file_path + ".enc") ; 
    char c;
    while (file_read_stream.get(c))
    { 
        encrypted_file_write_stream.put((~c));
    }

    file_read_stream.close() ; 
    encrypted_file_write_stream.close();
}

void decrypt(string file_path)
{
    ifstream file_read_stream(file_path); 
    ofstream encrypted_file_write_stream(file_path + ".decrypted") ; 
    char c;
    while (file_read_stream.get(c))
    { 
        encrypted_file_write_stream.put((~c));
    }

    file_read_stream.close() ; 
    encrypted_file_write_stream.close();
}

CLI::CLI(int argc, char** argv)
{

    try
    {

        if(argc != 3)
        {
            string error_msg = "Too many command line arguments provided, expected 3 found " +  to_string(argc); 
            throw error_msg;  
        }
        
        else if( string(argv[1]) != "decrypt" && string(argv[1]) != "encrypt")
        {
            
            string error_msg = "First arguement should be either 'decrypt' or 'encrypt' instead you entered " + string(argv[1]); 
            throw error_msg;  
        }
    }
    catch(string error)
    {
        cerr << error<< endl; 
        exit(1) ; 
    }

    this->action = argv[1] ; 
    this->file_path = argv[2];
    handle_command();

}

void CLI::CLI::handle_command()
{
    if(this->action == "encrypt")
    {
        encrypt(this->file_path);
    }
    else
    {
        decrypt(this->file_path);
    }
}

int main(int argc, char** argv) 
{ 
    CLI cli_inst = CLI(argc, argv);
} 