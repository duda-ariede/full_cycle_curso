FROM golang:1.20.0-alpine3.17 AS builder
WORKDIR /go/src/
COPY hello.go .
RUN go build hello.go

FROM scratch
COPY --from=builder /go/src/hello /
CMD ["/hello"]