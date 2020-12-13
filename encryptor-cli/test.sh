make clean
make build
./encryptor encrypt sample.txt
./encryptor decrypt sample.txt.enc
if   cmp -s "./sample.txt" "sample.txt.enc.decrypted" ;
then 
    echo "Tests Success."

else
    echo "Tests failed. See the diff below"
    diff sample.txt.enc sample.txt.enc.decrypted
fi
make clean