.PHONY: run-gcp

run-gcp:
	docker run -d  \
        --network=host \
        --name gcp-storage-emulator \
        -v "$PWD/cloudstorage":/storage \
        --security-opt=label:disable \
        oittaa/gcp-storage-emulator:latest