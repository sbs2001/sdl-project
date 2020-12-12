// Authored by: Shivam Sandbhor 
#include <iostream> 
#include <stdlib.h>
using namespace std;

class CLI{
    private: 
        string file_path;
        string action; 
        void handle_command() ; 

    public: 
        CLI(int argc, char** argv) ; 
};
