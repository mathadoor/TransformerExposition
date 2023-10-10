# if the a folder called model-store is not present or any of the files english.pkl, german.pkl, english_tokenizer.pkl, my_checkpoint.pth are not present
# then run the following commands to download the model files and tokenizer files

docker build . -t tinytransformer
docker run --rm -it -p 127.0.0.1:8080:8080  -p 127.0.0.1:8081:8081 -p 127.0.0.1:8082:8082 --name mar -v $(pwd):/home/model-server/model-store tinytransformer
curl -X POST "localhost:8081/models?model_name=tinytransformer&url=TinyTransformer.mar&initial_workers=1"
curl -H "Content-Type: application/json" -d '{"sentence":"The dog is running in a park."}' http://127.0.0.1:8080/predictions/tinytransformer