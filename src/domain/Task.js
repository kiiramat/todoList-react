class Task {
    constructor(text, isDone = false) {
        this.text = text;
        this.isDone = isDone;
    }

    toJsonString() {
        return JSON.stringify(this);
    }
    
    toString() {
        return this.toJsonString();
    }
}

Task.fromJson = (object) => {
    return new Task(object.text, object.isDone);
};

Task.fromJsonString = (jsonString) => {
    return Task.fromJson(JSON.parse(jsonString));
};
export default Task;