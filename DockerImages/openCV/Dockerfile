FROM gcr.io/tensorflow/tensorflow

RUN sudo apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    libgtk2.0-dev \
    pkg-config \
    libavcodec-dev \
    libavformat-dev \
    libswscale-dev

RUN mkdir /opencv
COPY ./opencv/ /opencv

RUN cd /opencv && \
    mkdir release && \
    cd release && \
    cmake ../ && make && sudo make install

RUN rm -R /notebooks && mkdir /notebooks

COPY video.mp4 /notebooks/
