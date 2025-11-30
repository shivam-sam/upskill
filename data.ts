

import { PatternData, PatternType, PatternCategory } from './types';

export const PATTERNS: Record<PatternType, PatternData> = {
  // ==================== CREATIONAL ====================
  [PatternType.FACTORY]: {
    id: PatternType.FACTORY,
    title: "Factory Method",
    category: PatternCategory.CREATIONAL,
    shortDescription: "Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.",
    concept: "Imagine a logistics company. Initially, you only have trucks. Later, you add ships. A 'Factory' handles the creation logic. You just ask for a 'Vehicle' to deliver 'Cargo', and the factory decides whether to give you a Truck or a Ship based on the route.",
    technicalDefinition: "Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.",
    whyUseIt: [
      "When you don't know beforehand the exact types and dependencies of the objects your code should work with.",
      "To provide users of your library or framework with a way to extend its internal components.",
      "To decouple product creation code from the product that is actually used."
    ],
    takeaways: [
      "Creates objects without specifying the exact class.",
      "Delegates instantiation logic to a special method.",
      "Useful when product types are dynamic.",
      "Adheres to the Single Responsibility Principle."
    ],
    code: {
      typescript: `
// 1. Common Interface
interface Transport {
  deliver(): void;
}

// 2. Concrete Products
class Truck implements Transport {
  deliver(): void {
    console.log("🚚 Delivering by land in a box.");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("🚢 Delivering by sea in a container.");
  }
}

// 3. Creator (Factory)
abstract class Logistics {
  // The Factory Method
  abstract createTransport(): Transport;

  // Core business logic uses the factory method
  planDelivery(): void {
    const transport = this.createTransport();
    console.log("Logistics: Plan started.");
    transport.deliver();
  }
}

// 4. Concrete Creators
class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// Usage
console.log("--- Road Trip ---");
const road = new RoadLogistics();
road.planDelivery();

console.log("\\n--- Sea Voyage ---");
const sea = new SeaLogistics();
sea.planDelivery();
`,
      python: `
from abc import ABC, abstractmethod

# 1. Product Interface
class Transport(ABC):
    @abstractmethod
    def deliver(self):
        pass

# 2. Concrete Products
class Truck(Transport):
    def deliver(self):
        print("🚚 Delivering by land in a box.")

class Ship(Transport):
    def deliver(self):
        print("🚢 Delivering by sea in a container.")

# 3. Creator (Factory)
class Logistics(ABC):
    @abstractmethod
    def create_transport(self) -> Transport:
        pass

    def plan_delivery(self):
        # Calls the factory method to get a product
        transport = self.create_transport()
        print(f"Logistics: Plan started.")
        transport.deliver()

# 4. Concrete Creators
class RoadLogistics(Logistics):
    def create_transport(self) -> Transport:
        return Truck()

class SeaLogistics(Logistics):
    def create_transport(self) -> Transport:
        return Ship()

# Usage
if __name__ == "__main__":
    print("--- Road Trip ---")
    road = RoadLogistics()
    road.plan_delivery()

    print("\\n--- Sea Voyage ---")
    sea = SeaLogistics()
    sea.plan_delivery()
`,
      cpp: `
#include <iostream>
#include <memory>
using namespace std;

// 1. Product Interface
class Transport {
public:
    virtual void deliver() = 0;
    virtual ~Transport() {}
};

// 2. Concrete Products
class Truck : public Transport {
public:
    void deliver() override {
        cout << "🚚 Delivering by land in a box." << endl;
    }
};

class Ship : public Transport {
public:
    void deliver() override {
        cout << "🚢 Delivering by sea in a container." << endl;
    }
};

// 3. Creator (Factory)
class Logistics {
public:
    virtual unique_ptr<Transport> createTransport() = 0;

    void planDelivery() {
        unique_ptr<Transport> transport = createTransport();
        cout << "Logistics: Plan started." << endl;
        transport->deliver();
    }
    virtual ~Logistics() {}
};

// 4. Concrete Creators
class RoadLogistics : public Logistics {
public:
    unique_ptr<Transport> createTransport() override {
        return make_unique<Truck>();
    }
};

class SeaLogistics : public Logistics {
public:
    unique_ptr<Transport> createTransport() override {
        return make_unique<Ship>();
    }
};

// Usage
int main() {
    cout << "--- Road Trip ---" << endl;
    unique_ptr<Logistics> road = make_unique<RoadLogistics>();
    road->planDelivery();

    cout << "\\n--- Sea Voyage ---" << endl;
    unique_ptr<Logistics> sea = make_unique<SeaLogistics>();
    sea->planDelivery();

    return 0;
}
`
    }
  },
  [PatternType.ABSTRACT_FACTORY]: {
    id: PatternType.ABSTRACT_FACTORY,
    title: "Abstract Factory",
    category: PatternCategory.CREATIONAL,
    shortDescription: "Lets you produce families of related objects without specifying their concrete classes.",
    concept: "Think of a furniture shop. You need a sofa, a chair, and a coffee table. An Abstract Factory ensures that if you choose the 'Modern' style, you get a Modern Sofa, Modern Chair, and Modern Table. If you choose 'Victorian', you get the full Victorian set. You don't mix and match accidentally.",
    technicalDefinition: "Provides an interface for creating families of related or dependent objects without specifying their concrete classes.",
    whyUseIt: [
      "When your code needs to work with various families of related products.",
      "To enforce consistency among products.",
      "When you want to isolate concrete classes from client code."
    ],
    takeaways: [
      "Creates families of related objects.",
      "Ensures products from the same factory match.",
      "Client code works with interfaces, not concrete classes.",
      "Adding new product families is easy; adding new products is hard."
    ],
    code: {
      typescript: `
// 1. Abstract Products
interface Chair {
  sitOn(): void;
}

interface Table {
  putCoffee(): void;
}

// 2. Concrete Families (Modern)
class ModernChair implements Chair {
  sitOn() { console.log("🪑 Sitting on a sleek Modern Chair."); }
}
class ModernTable implements Table {
  putCoffee() { console.log("☕ Placing coffee on a glass Modern Table."); }
}

// 3. Concrete Families (Victorian)
class VictorianChair implements Chair {
  sitOn() { console.log("🛋️ Sitting on an elegant Victorian Chair."); }
}
class VictorianTable implements Table {
  putCoffee() { console.log("🪵 Placing coffee on a wooden Victorian Table."); }
}

// 4. Abstract Factory
interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

// 5. Concrete Factories
class ModernFactory implements FurnitureFactory {
  createChair() { return new ModernChair(); }
  createTable() { return new ModernTable(); }
}

class VictorianFactory implements FurnitureFactory {
  createChair() { return new VictorianChair(); }
  createTable() { return new VictorianTable(); }
}

// 6. Client Code
function furnishHome(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();
  
  chair.sitOn();
  table.putCoffee();
}

// Usage
console.log("--- Modern Room ---");
furnishHome(new ModernFactory());

console.log("\\n--- Victorian Room ---");
furnishHome(new VictorianFactory());
`,
      python: `
from abc import ABC, abstractmethod

# 1. Abstract Products
class Chair(ABC):
    @abstractmethod
    def sit_on(self): pass

class Table(ABC):
    @abstractmethod
    def put_coffee(self): pass

# 2. Concrete Families (Modern)
class ModernChair(Chair):
    def sit_on(self): print("🪑 Sitting on a sleek Modern Chair.")

class ModernTable(Table):
    def put_coffee(self): print("☕ Placing coffee on a glass Modern Table.")

# 3. Concrete Families (Victorian)
class VictorianChair(Chair):
    def sit_on(self): print("🛋️ Sitting on an elegant Victorian Chair.")

class VictorianTable(Table):
    def put_coffee(self): print("🪵 Placing coffee on a wooden Victorian Table.")

# 4. Abstract Factory
class FurnitureFactory(ABC):
    @abstractmethod
    def create_chair(self) -> Chair: pass
    @abstractmethod
    def create_table(self) -> Table: pass

# 5. Concrete Factories
class ModernFactory(FurnitureFactory):
    def create_chair(self): return ModernChair()
    def create_table(self): return ModernTable()

class VictorianFactory(FurnitureFactory):
    def create_chair(self): return VictorianChair()
    def create_table(self): return VictorianTable()

# 6. Client Code
def furnish_home(factory: FurnitureFactory):
    chair = factory.create_chair()
    table = factory.create_table()
    chair.sit_on()
    table.put_coffee()

# Usage
if __name__ == "__main__":
    print("--- Modern Room ---")
    furnish_home(ModernFactory())

    print("\\n--- Victorian Room ---")
    furnish_home(VictorianFactory())
`,
      cpp: `
#include <iostream>
using namespace std;

// 1. Abstract Products
class Chair {
public: virtual void sitOn() = 0;
};
class Table {
public: virtual void putCoffee() = 0;
};

// 2. Concrete Families
class ModernChair : public Chair {
public: void sitOn() override { cout << "🪑 Sitting on Modern Chair." << endl; }
};
class ModernTable : public Table {
public: void putCoffee() override { cout << "☕ Coffee on Modern Table." << endl; }
};

class VictorianChair : public Chair {
public: void sitOn() override { cout << "🛋️ Sitting on Victorian Chair." << endl; }
};
class VictorianTable : public Table {
public: void putCoffee() override { cout << "🪵 Coffee on Victorian Table." << endl; }
};

// 3. Abstract Factory
class FurnitureFactory {
public:
    virtual Chair* createChair() = 0;
    virtual Table* createTable() = 0;
};

// 4. Concrete Factories
class ModernFactory : public FurnitureFactory {
public:
    Chair* createChair() override { return new ModernChair(); }
    Table* createTable() override { return new ModernTable(); }
};

class VictorianFactory : public FurnitureFactory {
public:
    Chair* createChair() override { return new VictorianChair(); }
    Table* createTable() override { return new VictorianTable(); }
};

// 5. Client
void furnishHome(FurnitureFactory* factory) {
    Chair* chair = factory->createChair();
    Table* table = factory->createTable();
    chair->sitOn();
    table->putCoffee();
    delete chair;
    delete table;
}

int main() {
    cout << "--- Modern Room ---" << endl;
    ModernFactory modern;
    furnishHome(&modern);

    cout << "\\n--- Victorian Room ---" << endl;
    VictorianFactory victorian;
    furnishHome(&victorian);
    return 0;
}
`
    }
  },
  [PatternType.BUILDER]: {
    id: PatternType.BUILDER,
    title: "Builder",
    category: PatternCategory.CREATIONAL,
    shortDescription: "Lets you construct complex objects step by step. The same construction process can produce different types and representations of an object.",
    concept: "Ordering a custom burger. You don't just say 'Burger'. You say: Bun type? Sesame. Patties? Two. Cheese? Cheddar. Sauce? BBQ. The 'Builder' takes these individual steps and assembles the final complex object (the custom burger) tailored to your choices.",
    technicalDefinition: "Separates the construction of a complex object from its representation so that the same construction process can create different representations.",
    whyUseIt: [
      "To get rid of a 'telescoping constructor' (constructors with 10 optional parameters).",
      "When you want your code to be able to create different representations of some product.",
      "To construct Complex objects step-by-step."
    ],
    takeaways: [
      "Separates construction from representation.",
      "Allows fine-grained control over the construction process.",
      "Isolates code for construction and assembly.",
      "Often used for fluent interfaces (method chaining)."
    ],
    code: {
      typescript: `
// 1. The Complex Product
class Computer {
  public cpu: string = '';
  public ram: string = '';
  public storage: string = '';
  public gpu: string = '';

  displaySpecs() {
    console.log(\`🖥️ Specs: CPU=\${this.cpu}, RAM=\${this.ram}, Storage=\${this.storage}, GPU=\${this.gpu}\`);
  }
}

// 2. The Builder Interface
interface ComputerBuilder {
  setCPU(cpu: string): this;
  setRAM(ram: string): this;
  setStorage(storage: string): this;
  setGPU(gpu: string): this;
  build(): Computer;
}

// 3. Concrete Builder
class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  reset() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }
  setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }
  setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    const result = this.computer;
    this.reset(); // Prepare for next build
    return result;
  }
}

// Usage (Fluent Interface)
const builder = new GamingComputerBuilder();

const myRig = builder
  .setCPU("Intel i9")
  .setRAM("32GB")
  .setStorage("1TB SSD")
  .setGPU("Nvidia RTX 4090")
  .build();

myRig.displaySpecs();

const officePC = builder
  .setCPU("Intel i5")
  .setRAM("16GB")
  .setStorage("512GB SSD")
  .build(); // No GPU

officePC.displaySpecs();
`,
      python: `
# 1. The Complex Product
class Computer:
    def __init__(self):
        self.cpu = ""
        self.ram = ""
        self.storage = ""
        self.gpu = "Integrated"

    def display_specs(self):
        print(f"🖥️ Specs: CPU={self.cpu}, RAM={self.ram}, Storage={self.storage}, GPU={self.gpu}")

# 2. The Builder
class ComputerBuilder:
    def __init__(self):
        self.computer = Computer()

    def reset(self):
        self.computer = Computer()

    def set_cpu(self, cpu):
        self.computer.cpu = cpu
        return self # Return self for chaining

    def set_ram(self, ram):
        self.computer.ram = ram
        return self

    def set_storage(self, storage):
        self.computer.storage = storage
        return self

    def set_gpu(self, gpu):
        self.computer.gpu = gpu
        return self

    def build(self):
        product = self.computer
        self.reset()
        return product

# Usage
if __name__ == "__main__":
    builder = ComputerBuilder()

    my_rig = (builder
        .set_cpu("Intel i9")
        .set_ram("32GB")
        .set_storage("1TB SSD")
        .set_gpu("RTX 4090")
        .build())
    
    my_rig.display_specs()

    office_pc = (builder
        .set_cpu("Intel i5")
        .set_ram("16GB")
        .set_storage("512GB SSD")
        .build())
    
    office_pc.display_specs()
`,
      cpp: `
#include <iostream>
#include <string>
using namespace std;

// 1. Product
class Computer {
public:
    string cpu, ram, storage, gpu = "Integrated";
    void display() {
        cout << "🖥️ Specs: " << cpu << ", " << ram << ", " << storage << ", " << gpu << endl;
    }
};

// 2. Builder
class ComputerBuilder {
private:
    Computer computer;
public:
    ComputerBuilder& setCPU(string cpu) {
        computer.cpu = cpu;
        return *this;
    }
    ComputerBuilder& setRAM(string ram) {
        computer.ram = ram;
        return *this;
    }
    ComputerBuilder& setStorage(string storage) {
        computer.storage = storage;
        return *this;
    }
    ComputerBuilder& setGPU(string gpu) {
        computer.gpu = gpu;
        return *this;
    }
    Computer build() {
        return computer; // Return copy
    }
};

// Usage
int main() {
    ComputerBuilder builder;
    
    Computer gamingPC = builder.setCPU("Intel i9")
                               .setRAM("32GB")
                               .setStorage("1TB NVMe")
                               .setGPU("RTX 4090")
                               .build();
    gamingPC.display();

    // Reset builder logic would be needed here for a new object usually
    // or instantiate a new builder
    ComputerBuilder builder2;
    Computer officePC = builder2.setCPU("i5").setRAM("16GB").setStorage("512GB").build();
    officePC.display();

    return 0;
}
`
    }
  },
  [PatternType.PROTOTYPE]: {
    id: PatternType.PROTOTYPE,
    title: "Prototype",
    category: PatternCategory.CREATIONAL,
    shortDescription: "Lets you copy existing objects without making your code dependent on their classes.",
    concept: "Cell division (Mitosis). A cell doesn't ask a factory to build a new cell from scratch. Instead, it copies itself. The new cell is an exact clone of the prototype. Useful when creating a new object from scratch is expensive or complicated.",
    technicalDefinition: "Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.",
    whyUseIt: [
      "When your code shouldn't depend on the concrete classes of objects that you need to copy.",
      "When creating an object from scratch is resource-intensive (e.g., database calls).",
      "To avoid subclassing just to initialize objects differently."
    ],
    takeaways: [
      "Clones objects to create new ones.",
      "Hides the complexity of creating new instances.",
      "avoid repetitive initialization code.",
      "Useful for heavy objects like database configurations."
    ],
    code: {
      typescript: `
// 1. Prototype Interface
interface Prototype {
  clone(): Prototype;
}

// 2. Concrete Prototype
class SmartPhone implements Prototype {
  public model: string;
  public color: string;
  public apps: string[];

  constructor(model: string, color: string, apps: string[] = []) {
    this.model = model;
    this.color = color;
    this.apps = apps;
  }

  // Deep Copy Logic
  clone(): SmartPhone {
    // We create a new object with the same primitive values
    // And importantly, we COPY the array (reference type) to avoid sharing it
    const clone = new SmartPhone(this.model, this.color, [...this.apps]);
    return clone;
  }

  display() {
    console.log(\`📱 \${this.model} (\${this.color}) - Apps: \${this.apps.join(', ')}\`);
  }
}

// Usage
const original = new SmartPhone("Galaxy S24", "Black", ["Maps", "Browser"]);
console.log("Original:");
original.display();

// Clone it
const copy = original.clone();
console.log("Clone (Initial):");
copy.display();

// Modify Copy (Should not affect Original)
copy.color = "Silver";
copy.apps.push("Games");

console.log("\\n--- After Modification ---");
console.log("Original (Unchanged):");
original.display();
console.log("Clone (Modified):");
copy.display();
`,
      python: `
import copy

# 1. Prototype Class
class SmartPhone:
    def __init__(self, model, color, apps=None):
        self.model = model
        self.color = color
        self.apps = apps if apps else []

    # Python's built-in hooks for copying
    def clone(self):
        return copy.deepcopy(self)

    def display(self):
        print(f"📱 {self.model} ({self.color}) - Apps: {', '.join(self.apps)}")

# Usage
if __name__ == "__main__":
    original = SmartPhone("Galaxy S24", "Black", ["Maps", "Browser"])
    print("Original:")
    original.display()

    # Create a clone
    cloned_phone = original.clone()
    
    # Modify clone
    cloned_phone.color = "Silver"
    cloned_phone.apps.append("Games")

    print("\\n--- After Modification ---")
    print("Original (Should remain Black with 2 apps):")
    original.display()
    print("Clone (Should be Silver with 3 apps):")
    cloned_phone.display()
`,
      cpp: `
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class SmartPhone {
public:
    string model;
    string color;
    vector<string> apps;

    SmartPhone(string m, string c, vector<string> a) : model(m), color(c), apps(a) {}

    // Copy Constructor (Handles deep copy automatically for vector)
    SmartPhone(const SmartPhone& other) 
        : model(other.model), color(other.color), apps(other.apps) {}

    // Clone Method
    SmartPhone* clone() {
        return new SmartPhone(*this); // Calls copy constructor
    }

    void display() {
        cout << "📱 " << model << " (" << color << ") - Apps: ";
        for(const auto& app : apps) cout << app << " ";
        cout << endl;
    }
};

int main() {
    vector<string> apps = {"Maps", "Browser"};
    SmartPhone* original = new SmartPhone("Galaxy S24", "Black", apps);
    
    SmartPhone* copyPhone = original->clone();
    copyPhone->color = "Silver";
    copyPhone->apps.push_back("Games");

    cout << "Original:" << endl;
    original->display();
    
    cout << "Clone:" << endl;
    copyPhone->display();

    delete original;
    delete copyPhone;
    return 0;
}
`
    }
  },
  [PatternType.SINGLETON]: {
    id: PatternType.SINGLETON,
    title: "Singleton",
    category: PatternCategory.CREATIONAL,
    shortDescription: "Lets you ensure that a class has only one instance, while providing a global access point to this instance.",
    concept: "The President of a country. There can only be one active president at a time. Whenever anyone refers to 'The President', they are referring to that same single person. The system prevents multiple people from holding the title simultaneously.",
    technicalDefinition: "Ensures a class has only one instance and provides a global point of access to it.",
    whyUseIt: [
      "When a class in your program should have just a single instance available to all clients (e.g., a database connection shared by all parts of the app).",
      "To control access to a shared resource.",
      "To provide a global access point."
    ],
    takeaways: [
      "Guarantees only one instance exists.",
      "Provides a global access point.",
      "Lazy initialization is common.",
      "Can be difficult to unit test (global state)."
    ],
    code: {
      typescript: `
class DatabaseConnection {
  // 1. Static variable to hold the single instance
  private static instance: DatabaseConnection;

  // 2. Private constructor prevents direct 'new DatabaseConnection()' calls
  private constructor() {
    console.log("🔌 Initializing DB Connection... (Should only happen once)");
  }

  // 3. Static method to access the instance
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(\`Running Query: \${sql}\`);
  }
}

// Usage
// const db = new DatabaseConnection(); // Error: constructor is private

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

db1.query("SELECT * FROM users");
db2.query("UPDATE users SET name='Alice'");

if (db1 === db2) {
  console.log("✅ Both variables hold the exact same instance.");
}
`,
      python: `
class DatabaseConnection:
    _instance = None

    # Python's constructor allocator
    def __new__(cls):
        if cls._instance is None:
            print("🔌 Initializing DB Connection...")
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
        return cls._instance

    def query(self, sql):
        print(f"Running Query: {sql}")

# Usage
if __name__ == "__main__":
    db1 = DatabaseConnection()
    db2 = DatabaseConnection()

    db1.query("SELECT * FROM users")

    if db1 is db2:
        print("✅ Both variables hold the exact same instance.")
`,
      cpp: `
#include <iostream>
using namespace std;

class DatabaseConnection {
private:
    static DatabaseConnection* instance;
    
    // Private Constructor
    DatabaseConnection() {
        cout << "🔌 Initializing DB Connection..." << endl;
    }

public:
    // Delete copy constructor to prevent cloning
    DatabaseConnection(const DatabaseConnection&) = delete;

    static DatabaseConnection* getInstance() {
        if (instance == nullptr) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    void query(string sql) {
        cout << "Running Query: " << sql << endl;
    }
};

// Initialize static member
DatabaseConnection* DatabaseConnection::instance = nullptr;

int main() {
    DatabaseConnection* db1 = DatabaseConnection::getInstance();
    DatabaseConnection* db2 = DatabaseConnection::getInstance();

    db1->query("SELECT * FROM users");

    if (db1 == db2) {
        cout << "✅ Both variables hold the exact same instance." << endl;
    }
    return 0;
}
`
    }
  },

  // ==================== STRUCTURAL ====================
  [PatternType.ADAPTER]: {
    id: PatternType.ADAPTER,
    title: "Adapter",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Allows objects with incompatible interfaces to collaborate.",
    concept: "A travel power plug adapter. Your laptop plug (Client) doesn't fit into the foreign wall socket (Service). The adapter sits in the middle, translating the shape of your plug into the shape of the socket, allowing electricity to flow.",
    technicalDefinition: "Converts the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.",
    whyUseIt: [
      "When you want to use an existing class, but its interface isn't compatible with the rest of your code.",
      "When you want to reuse several existing subclasses that lack some common functionality that can't be added to the superclass."
    ],
    takeaways: [
      "Converts one interface to another.",
      "Allows incompatible classes to work together.",
      "Useful for integrating legacy code.",
      "Can be implemented via inheritance (Class Adapter) or composition (Object Adapter)."
    ],
    code: {
      typescript: `
// 1. Target Interface (What the client expects)
interface USBCPort {
  connectUSBC(): void;
}

// 2. Adaptee (The old legacy class, incompatible)
class OldUSBADrive {
  insertUSBA(): void {
    console.log("💾 USB-A Drive inserted.");
  }
}

// 3. Adapter (Makes Adaptee look like Target)
class USBCAdapter implements USBCPort {
  private drive: OldUSBADrive;

  constructor(drive: OldUSBADrive) {
    this.drive = drive;
  }

  connectUSBC(): void {
    console.log("🔌 Adapter converting USB-C call to USB-A...");
    this.drive.insertUSBA();
  }
}

// Usage
const myLaptop = {
  connectDevice: (device: USBCPort) => {
    device.connectUSBC();
  }
};

const oldDrive = new OldUSBADrive();
// myLaptop.connectDevice(oldDrive); // Error! Incompatible.

const adapter = new USBCAdapter(oldDrive);
myLaptop.connectDevice(adapter); // Works!
`,
      python: `
# 1. Target Interface (Conceptually)
class USBCPort:
    def connect_usbc(self): pass

# 2. Adaptee
class OldUSBADrive:
    def insert_usba(self):
        print("💾 USB-A Drive inserted.")

# 3. Adapter
class USBCAdapter:
    def __init__(self, drive):
        self.drive = drive

    def connect_usbc(self):
        print("🔌 Adapter converting USB-C call to USB-A...")
        self.drive.insert_usba()

# Usage
def connect_device_to_laptop(device):
    device.connect_usbc()

old_drive = OldUSBADrive()
# connect_device_to_laptop(old_drive) # Fails

adapter = USBCAdapter(old_drive)
connect_device_to_laptop(adapter) # Works
`,
      cpp: `
#include <iostream>
using namespace std;

// 1. Target
class USBCPort {
public:
    virtual void connectUSBC() = 0;
};

// 2. Adaptee
class OldUSBADrive {
public:
    void insertUSBA() {
        cout << "💾 USB-A Drive inserted." << endl;
    }
};

// 3. Adapter
class USBCAdapter : public USBCPort {
private:
    OldUSBADrive* drive;
public:
    USBCAdapter(OldUSBADrive* d) : drive(d) {}
    
    void connectUSBC() override {
        cout << "🔌 Adapter converting USB-C to USB-A..." << endl;
        drive->insertUSBA();
    }
};

// Usage
int main() {
    OldUSBADrive* oldDrive = new OldUSBADrive();
    USBCAdapter* adapter = new USBCAdapter(oldDrive);
    
    adapter->connectUSBC();
    
    delete oldDrive;
    delete adapter;
    return 0;
}
`
    }
  },
  [PatternType.BRIDGE]: {
    id: PatternType.BRIDGE,
    title: "Bridge",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently.",
    concept: "A remote control (Abstraction) and a TV (Implementation). You can have a basic remote or a fancy remote. You can have a Sony TV or a Samsung TV. The remote doesn't need to know the inner details of the TV brand; it just sends signals. You can develop new remotes without changing TVs, and vice versa.",
    technicalDefinition: "Decouples an abstraction from its implementation so that the two can vary independently.",
    whyUseIt: [
      "When you want to divide and organize a monolithic class that has several variants of functionality.",
      "To extend a class in several orthogonal (independent) dimensions.",
      "To switch implementations at runtime."
    ],
    takeaways: [
      "Separates abstraction from implementation.",
      "Both hierarchies can grow independently.",
      "Prevents Cartesian product complexity explosion.",
      "Uses composition over inheritance."
    ],
    code: {
      typescript: `
// 1. Implementation Interface
interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
}

// 2. Concrete Implementations
class TV implements Device {
  private on = false;
  isEnabled() { return this.on; }
  enable() { this.on = true; console.log("📺 TV turned ON"); }
  disable() { this.on = false; console.log("📺 TV turned OFF"); }
}

class Radio implements Device {
  private on = false;
  isEnabled() { return this.on; }
  enable() { this.on = true; console.log("📻 Radio turned ON"); }
  disable() { this.on = false; console.log("📻 Radio turned OFF"); }
}

// 3. Abstraction
class RemoteControl {
  constructor(protected device: Device) {}

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
}

// 4. Refined Abstraction
class AdvancedRemote extends RemoteControl {
  mute() {
    console.log("🔇 Muting device...");
    // Complex logic here
  }
}

// Usage
const tv = new TV();
const remote = new RemoteControl(tv);
remote.togglePower(); // Turns TV On

const radio = new Radio();
const advancedRemote = new AdvancedRemote(radio);
advancedRemote.togglePower(); // Turns Radio On
advancedRemote.mute();
`,
      python: `
# 1. Implementation
class Device:
    def is_enabled(self): pass
    def enable(self): pass
    def disable(self): pass

# 2. Concrete Implementations
class TV(Device):
    def __init__(self): self.on = False
    def is_enabled(self): return self.on
    def enable(self): 
        self.on = True
        print("📺 TV turned ON")
    def disable(self): 
        self.on = False
        print("📺 TV turned OFF")

class Radio(Device):
    def __init__(self): self.on = False
    def is_enabled(self): return self.on
    def enable(self): 
        self.on = True
        print("📻 Radio turned ON")
    def disable(self): 
        self.on = False
        print("📻 Radio turned OFF")

# 3. Abstraction
class RemoteControl:
    def __init__(self, device):
        self.device = device
    
    def toggle_power(self):
        if self.device.is_enabled():
            self.device.disable()
        else:
            self.device.enable()

# 4. Refined Abstraction
class AdvancedRemote(RemoteControl):
    def mute(self):
        print("🔇 Muting device...")

# Usage
tv = TV()
remote = RemoteControl(tv)
remote.toggle_power()

radio = Radio()
adv_remote = AdvancedRemote(radio)
adv_remote.toggle_power()
adv_remote.mute()
`,
      cpp: `
#include <iostream>
using namespace std;

// 1. Implementation
class Device {
public:
    virtual bool isEnabled() = 0;
    virtual void enable() = 0;
    virtual void disable() = 0;
};

// 2. Concrete Implementations
class TV : public Device {
    bool on = false;
public:
    bool isEnabled() override { return on; }
    void enable() override { on = true; cout << "📺 TV turned ON" << endl; }
    void disable() override { on = false; cout << "📺 TV turned OFF" << endl; }
};

class Radio : public Device {
    bool on = false;
public:
    bool isEnabled() override { return on; }
    void enable() override { on = true; cout << "📻 Radio turned ON" << endl; }
    void disable() override { on = false; cout << "📻 Radio turned OFF" << endl; }
};

// 3. Abstraction
class RemoteControl {
protected:
    Device* device;
public:
    RemoteControl(Device* d) : device(d) {}
    virtual void togglePower() {
        if(device->isEnabled()) device->disable();
        else device->enable();
    }
};

// 4. Refined Abstraction
class AdvancedRemote : public RemoteControl {
public:
    AdvancedRemote(Device* d) : RemoteControl(d) {}
    void mute() {
        cout << "🔇 Muting device..." << endl;
    }
};

int main() {
    TV tv;
    RemoteControl remote(&tv);
    remote.togglePower();

    Radio radio;
    AdvancedRemote advRemote(&radio);
    advRemote.togglePower();
    advRemote.mute();
    return 0;
}
`
    }
  },
  [PatternType.COMPOSITE]: {
    id: PatternType.COMPOSITE,
    title: "Composite",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Lets you compose objects into tree structures and then work with these structures as if they were individual objects.",
    concept: "A file system structure. A folder can contain files or other folders. If you want to know the 'size' of a folder, you don't care if it contains a single file or a nested tree of folders. You just call `getSize()` and it recursively calculates the total. The client treats files and folders uniformly.",
    technicalDefinition: "Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
    whyUseIt: [
      "When you need to implement a tree-like object structure.",
      "When you want the client code to treat simple and complex elements uniformly."
    ],
    takeaways: [
      "Treats individual objects and compositions uniformly.",
      "Ideal for tree structures (UI trees, file systems).",
      "Simplifies client code.",
      "Makes it easy to add new component types."
    ],
    code: {
      typescript: `
// 1. Component
abstract class FileSystemNode {
  constructor(public name: string) {}
  abstract getSize(): number;
}

// 2. Leaf
class File extends FileSystemNode {
  constructor(name: string, private size: number) {
    super(name);
  }
  getSize(): number {
    return this.size;
  }
}

// 3. Composite
class Folder extends FileSystemNode {
  private children: FileSystemNode[] = [];

  add(node: FileSystemNode) {
    this.children.push(node);
  }

  getSize(): number {
    // Recursive magic happens here
    return this.children.reduce((acc, child) => acc + child.getSize(), 0);
  }
}

// Usage
const root = new Folder("Root");
const folderA = new Folder("My Documents");
const folderB = new Folder("Images");

const file1 = new File("resume.pdf", 500);
const file2 = new File("photo.png", 2000);
const file3 = new File("notes.txt", 100);

folderA.add(file1);
folderB.add(file2);
root.add(folderA);
root.add(folderB);
root.add(file3); // Adding file directly to root

console.log(\`Total Size: \${root.getSize()} KB\`);
// Output: 2600 KB (500 + 2000 + 100)
`,
      python: `
from abc import ABC, abstractmethod

# 1. Component
class FileSystemNode(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def get_size(self): pass

# 2. Leaf
class File(FileSystemNode):
    def __init__(self, name, size):
        super().__init__(name)
        self.size = size

    def get_size(self):
        return self.size

# 3. Composite
class Folder(FileSystemNode):
    def __init__(self, name):
        super().__init__(name)
        self.children = []

    def add(self, node):
        self.children.append(node)

    def get_size(self):
        # Recursive summation
        return sum(child.get_size() for child in self.children)

# Usage
root = Folder("Root")
folder_a = Folder("Documents")
folder_b = Folder("Images")

root.add(folder_a)
root.add(folder_b)

folder_a.add(File("resume.pdf", 500))
folder_b.add(File("photo.png", 2000))
root.add(File("notes.txt", 100))

print(f"Total Size: {root.get_size()} KB")
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <numeric>
using namespace std;

// 1. Component
class FileSystemNode {
protected:
    string name;
public:
    FileSystemNode(string n) : name(n) {}
    virtual int getSize() = 0;
    virtual ~FileSystemNode() {}
};

// 2. Leaf
class File : public FileSystemNode {
    int size;
public:
    File(string n, int s) : FileSystemNode(n), size(s) {}
    int getSize() override { return size; }
};

// 3. Composite
class Folder : public FileSystemNode {
    vector<FileSystemNode*> children;
public:
    Folder(string n) : FileSystemNode(n) {}
    
    void add(FileSystemNode* node) {
        children.push_back(node);
    }
    
    int getSize() override {
        int total = 0;
        for(auto child : children) {
            total += child->getSize();
        }
        return total;
    }
};

int main() {
    Folder* root = new Folder("Root");
    Folder* docs = new Folder("Docs");
    
    docs->add(new File("resume.pdf", 500));
    root->add(docs);
    root->add(new File("photo.png", 2000));
    
    cout << "Total Size: " << root->getSize() << " KB" << endl;
    return 0;
}
`
    }
  },
  [PatternType.DECORATOR]: {
    id: PatternType.DECORATOR,
    title: "Decorator",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.",
    concept: "Wearing clothes. You (the Object) are the same person whether you're naked or dressed. But if it's cold, you put on a sweater (Decorator). If it's raining, you put a raincoat over the sweater. You are 'decorating' yourself with layers that add functionality (warmth, dryness) without changing who you are.",
    technicalDefinition: "Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",
    whyUseIt: [
      "When you need to assign extra behaviors to objects at runtime without breaking the code that uses these objects.",
      "When it's awkward or not possible to extend a class's behavior using inheritance."
    ],
    takeaways: [
      "Adds behavior dynamically.",
      "Alternative to subclassing for extending functionality.",
      "Supports recursive composition (onion layers).",
      "Adheres to Open/Closed Principle."
    ],
    code: {
      typescript: `
// 1. Component Interface
interface Coffee {
  cost(): number;
  description(): string;
}

// 2. Concrete Component
class SimpleCoffee implements Coffee {
  cost() { return 10; }
  description() { return "Coffee"; }
}

// 3. Base Decorator
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost() { return this.coffee.cost(); }
  description() { return this.coffee.description(); }
}

// 4. Concrete Decorators
class Milk extends CoffeeDecorator {
  cost() { return super.cost() + 2; }
  description() { return super.description() + ", Milk"; }
}

class Sugar extends CoffeeDecorator {
  cost() { return super.cost() + 1; }
  description() { return super.description() + ", Sugar"; }
}

class Vanilla extends CoffeeDecorator {
  cost() { return super.cost() + 3; }
  description() { return super.description() + ", Vanilla"; }
}

// Usage
let myCoffee = new SimpleCoffee();
console.log(\`\${myCoffee.description()} = $\${myCoffee.cost()}\`);

myCoffee = new Milk(myCoffee);
console.log(\`\${myCoffee.description()} = $\${myCoffee.cost()}\`);

// Double Sugar
myCoffee = new Sugar(new Sugar(myCoffee));
console.log(\`\${myCoffee.description()} = $\${myCoffee.cost()}\`);
// Output: Coffee, Milk, Sugar, Sugar = $14
`,
      python: `
# 1. Component
class Coffee:
    def cost(self): return 10
    def description(self): return "Coffee"

# 2. Decorators
class CoffeeDecorator:
    def __init__(self, coffee):
        self._coffee = coffee
    
    def cost(self): return self._coffee.cost()
    def description(self): return self._coffee.description()

class Milk(CoffeeDecorator):
    def cost(self): return self._coffee.cost() + 2
    def description(self): return self._coffee.description() + ", Milk"

class Sugar(CoffeeDecorator):
    def cost(self): return self._coffee.cost() + 1
    def description(self): return self._coffee.description() + ", Sugar"

# Usage
my_coffee = Coffee()
my_coffee = Milk(my_coffee)
my_coffee = Sugar(my_coffee)

print(f"{my_coffee.description()} = \${my_coffee.cost()}")
`,
      cpp: `
#include <iostream>
#include <string>
using namespace std;

// 1. Component
class Coffee {
public:
    virtual int cost() { return 10; }
    virtual string description() { return "Coffee"; }
    virtual ~Coffee() {}
};

// 2. Decorator
class CoffeeDecorator : public Coffee {
protected:
    Coffee* coffee;
public:
    CoffeeDecorator(Coffee* c) : coffee(c) {}
};

class Milk : public CoffeeDecorator {
public:
    Milk(Coffee* c) : CoffeeDecorator(c) {}
    int cost() override { return coffee->cost() + 2; }
    string description() override { return coffee->description() + ", Milk"; }
};

class Sugar : public CoffeeDecorator {
public:
    Sugar(Coffee* c) : CoffeeDecorator(c) {}
    int cost() override { return coffee->cost() + 1; }
    string description() override { return coffee->description() + ", Sugar"; }
};

int main() {
    Coffee* myCoffee = new Coffee();
    myCoffee = new Milk(myCoffee);
    myCoffee = new Sugar(myCoffee);
    
    cout << myCoffee->description() << " = $" << myCoffee->cost() << endl;
    return 0;
}
`
    }
  },
  [PatternType.FACADE]: {
    id: PatternType.FACADE,
    title: "Facade",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Provides a simplified interface to a library, a framework, or any other complex set of classes.",
    concept: "A home theater system remote. To watch a movie, you might need to turn on the TV, set the input, turn on the speakers, set the volume, turn on the DVD player, and press play. A Facade is a single button 'Watch Movie' that does all of this for you behind the scenes, hiding the complexity.",
    technicalDefinition: "Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.",
    whyUseIt: [
      "When you need to have a limited but straightforward interface to a complex subsystem.",
      "When you want to structure a subsystem into layers."
    ],
    takeaways: [
      "Simplifies a complex system interface.",
      "Decouples client from the subsystem.",
      "Does not prevent access to the deeper system if needed.",
      "Commonly used to wrap libraries."
    ],
    code: {
      typescript: `
// Complex Subsystem Parts
class Amplifier {
  on() { console.log("Amp On"); }
  setVolume(v: number) { console.log(\`Volume set to \${v}\`); }
}

class Projector {
  on() { console.log("Projector On"); }
  setInput(input: string) { console.log(\`Input set to \${input}\`); }
}

class Lights {
  dim(level: number) { console.log(\`Lights dimmed to \${level}%\`); }
}

// Facade
class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private proj: Projector,
    private lights: Lights
  ) {}

  watchMovie(movie: string) {
    console.log(\`--- Get ready to watch \${movie} ---\`);
    this.lights.dim(10);
    this.amp.on();
    this.amp.setVolume(5);
    this.proj.on();
    this.proj.setInput("BluRay");
  }
}

// Usage
const homeTheater = new HomeTheaterFacade(
  new Amplifier(),
  new Projector(),
  new Lights()
);

homeTheater.watchMovie("Inception");
`,
      python: `
# Subsystems
class Amplifier:
    def on(self): print("Amp On")
    def set_volume(self, v): print(f"Volume set to {v}")

class Projector:
    def on(self): print("Projector On")
    def set_input(self, i): print(f"Input set to {i}")

class Lights:
    def dim(self, l): print(f"Lights dimmed to {l}%")

# Facade
class HomeTheaterFacade:
    def __init__(self, amp, proj, lights):
        self.amp = amp
        self.proj = proj
        self.lights = lights

    def watch_movie(self, movie):
        print(f"--- Get ready to watch {movie} ---")
        self.lights.dim(10)
        self.amp.on()
        self.amp.set_volume(5)
        self.proj.on()
        self.proj.set_input("BluRay")

# Usage
home = HomeTheaterFacade(Amplifier(), Projector(), Lights())
home.watch_movie("Matrix")
`,
      cpp: `
#include <iostream>
#include <string>
using namespace std;

// Subsystems
class Amplifier {
public: void on() { cout << "Amp On" << endl; }
};
class Projector {
public: void on() { cout << "Projector On" << endl; }
};
class Lights {
public: void dim() { cout << "Lights dimmed" << endl; }
};

// Facade
class HomeTheaterFacade {
    Amplifier amp;
    Projector proj;
    Lights lights;
public:
    void watchMovie() {
        cout << "--- Watching Movie ---" << endl;
        lights.dim();
        amp.on();
        proj.on();
    }
};

int main() {
    HomeTheaterFacade home;
    home.watchMovie();
    return 0;
}
`
    }
  },
  [PatternType.FLYWEIGHT]: {
    id: PatternType.FLYWEIGHT,
    title: "Flyweight",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.",
    concept: "A forest in a video game. Drawing 1 million unique trees would crash the game. Instead, you create one 'Tree Type' object (green texture, pine shape) and reuse it 1 million times, only changing the position (x, y) for each instance. The heavy data is shared; the unique data is lightweight.",
    technicalDefinition: "Uses sharing to support large numbers of fine-grained objects efficiently.",
    whyUseIt: [
      "When your program needs to spawn a huge number of similar objects.",
      "When your app runs out of RAM due to object overhead."
    ],
    takeaways: [
      "Optimizes memory usage.",
      "Separates intrinsic (shared) and extrinsic (unique) state.",
      "Intrinsic state is immutable.",
      "Essential for game development and graphics."
    ],
    code: {
      typescript: `
// 1. Intrinsic State (Shared, Heavy)
class TreeType {
  constructor(private name: string, private color: string, private texture: string) {}

  draw(x: number, y: number) {
    console.log(\`Drawing \${this.name} (\${this.color}) at x:\${x}, y:\${y}\`);
  }
}

// 2. Factory (Manages Cache)
class TreeFactory {
  static treeTypes: Record<string, TreeType> = {};

  static getTreeType(name: string, color: string, texture: string) {
    const key = \`\${name}-\${color}\`;
    if (!this.treeTypes[key]) {
      console.log(\`Creating new TreeType: \${name}\`);
      this.treeTypes[key] = new TreeType(name, color, texture);
    }
    return this.treeTypes[key];
  }
}

// 3. Extrinsic State (Context, Unique)
class Tree {
  constructor(
    private x: number, 
    private y: number, 
    private type: TreeType
  ) {}

  draw() {
    this.type.draw(this.x, this.y);
  }
}

// Usage: Planting a forest
const forest: Tree[] = [];
const type1 = TreeFactory.getTreeType("Oak", "Green", "TextureA");
const type2 = TreeFactory.getTreeType("Pine", "DarkGreen", "TextureB");

// Reusing existing type!
const type3 = TreeFactory.getTreeType("Oak", "Green", "TextureA"); 

forest.push(new Tree(1, 2, type1));
forest.push(new Tree(5, 5, type2));
forest.push(new Tree(10, 20, type3)); // Uses cached Oak

forest.forEach(t => t.draw());
// Only 2 TreeTypes created for 3 trees.
`,
      python: `
# 1. Intrinsic
class TreeType:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def draw(self, x, y):
        print(f"Drawing {self.name} ({self.color}) at {x}, {y}")

# 2. Factory
class TreeFactory:
    _types = {}

    @staticmethod
    def get_tree_type(name, color):
        key = (name, color)
        if key not in TreeFactory._types:
            print(f"Creating new TreeType: {name}")
            TreeFactory._types[key] = TreeType(name, color)
        return TreeFactory._types[key]

# 3. Extrinsic
class Tree:
    def __init__(self, x, y, tree_type):
        self.x = x
        self.y = y
        self.type = tree_type
    
    def draw(self):
        self.type.draw(self.x, self.y)

# Usage
type_a = TreeFactory.get_tree_type("Oak", "Green")
type_b = TreeFactory.get_tree_type("Pine", "DarkGreen")
type_c = TreeFactory.get_tree_type("Oak", "Green") # Reuses type_a

t1 = Tree(1, 1, type_a)
t2 = Tree(2, 5, type_b)
t3 = Tree(10, 10, type_c)

t1.draw()
t2.draw()
t3.draw()
`,
      cpp: `
#include <iostream>
#include <map>
#include <string>
using namespace std;

// 1. Intrinsic
class TreeType {
    string name;
public:
    TreeType(string n) : name(n) {}
    void draw(int x, int y) {
        cout << "Drawing " << name << " at " << x << "," << y << endl;
    }
};

// 2. Factory
class TreeFactory {
    static map<string, TreeType*> types;
public:
    static TreeType* getTreeType(string name) {
        if (types.find(name) == types.end()) {
            cout << "Creating new " << name << endl;
            types[name] = new TreeType(name);
        }
        return types[name];
    }
};
map<string, TreeType*> TreeFactory::types;

// 3. Extrinsic
class Tree {
    int x, y;
    TreeType* type;
public:
    Tree(int x, int y, TreeType* t) : x(x), y(y), type(t) {}
    void draw() { type->draw(x, y); }
};

int main() {
    TreeType* oak = TreeFactory::getTreeType("Oak");
    TreeType* pine = TreeFactory::getTreeType("Pine");
    TreeType* oak2 = TreeFactory::getTreeType("Oak"); // Returns existing

    Tree t1(1, 2, oak);
    Tree t2(5, 5, pine);
    Tree t3(10, 20, oak2);

    t1.draw();
    t2.draw();
    t3.draw();
    return 0;
}
`
    }
  },
  [PatternType.PROXY]: {
    id: PatternType.PROXY,
    title: "Proxy",
    category: PatternCategory.STRUCTURAL,
    shortDescription: "Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.",
    concept: "A credit card. It is a proxy for the cash in your bank account. You can use it to pay, but the bank (the real object) checks if you have funds before approving. It acts as a gateway and control mechanism without you needing to carry the actual cash bundle.",
    technicalDefinition: "Provides a surrogate or placeholder for another object to control access to it.",
    whyUseIt: [
      "Lazy initialization (virtual proxy).",
      "Access control (protection proxy).",
      "Local execution of a remote service (remote proxy).",
      "Logging requests (logging proxy)."
    ],
    takeaways: [
      "Controls access to an object.",
      "Can handle lazy loading/caching.",
      "Client doesn't know it's using a proxy.",
      "Adds a layer of security or management."
    ],
    code: {
      typescript: `
interface Video {
  play(): void;
}

class RealVideo implements Video {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(\`Loading \${this.filename} from disk... (Heavy Operation)\`);
  }

  play() {
    console.log(\`Playing \${this.filename}\`);
  }
}

// Proxy
class ProxyVideo implements Video {
  private realVideo: RealVideo | null = null;

  constructor(private filename: string) {}

  play() {
    // Lazy Initialization:
    // Only create the heavy object when needed
    if (this.realVideo === null) {
      this.realVideo = new RealVideo(this.filename);
    }
    this.realVideo.play();
  }
}

// Usage
const video = new ProxyVideo("tutorial.mp4");

// Video is NOT loaded yet (saving memory)
console.log("Video object created. Nothing loaded.");

// Video loads now
video.play(); 

// Video plays immediately (already loaded)
video.play(); 
`,
      python: `
class RealVideo:
    def __init__(self, filename):
        self.filename = filename
        print(f"Loading {filename} from disk... (Heavy)")
    
    def play(self):
        print(f"Playing {self.filename}")

class ProxyVideo:
    def __init__(self, filename):
        self.filename = filename
        self.real_video = None
    
    def play(self):
        if self.real_video is None:
            self.real_video = RealVideo(self.filename)
        self.real_video.play()

# Usage
video = ProxyVideo("movie.mp4")
print("Proxy created.")
video.play() # Loads now
video.play() # Cached
`,
      cpp: `
#include <iostream>
#include <string>
using namespace std;

class Video {
public:
    virtual void play() = 0;
};

class RealVideo : public Video {
    string filename;
public:
    RealVideo(string f) : filename(f) {
        cout << "Loading " << filename << "..." << endl;
    }
    void play() override {
        cout << "Playing " << filename << endl;
    }
};

class ProxyVideo : public Video {
    RealVideo* realVideo;
    string filename;
public:
    ProxyVideo(string f) : filename(f), realVideo(nullptr) {}
    
    void play() override {
        if (!realVideo) {
            realVideo = new RealVideo(filename);
        }
        realVideo->play();
    }
};

int main() {
    ProxyVideo video("movie.mp4");
    cout << "Proxy created" << endl;
    video.play();
    video.play();
    return 0;
}
`
    }
  },

  // ==================== BEHAVIORAL ====================
  [PatternType.CHAIN_OF_RESPONSIBILITY]: {
    id: PatternType.CHAIN_OF_RESPONSIBILITY,
    title: "Chain of Responsibility",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.",
    concept: "Tech support. You call the help desk (Level 1). If they can't fix it, they pass you to a specialist (Level 2). If it's a bug, it goes to a developer (Level 3). The request travels up the chain until someone handles it.",
    technicalDefinition: "Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chains the receiving objects and passes the request along the chain until an object handles it.",
    whyUseIt: [
      "When your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.",
      "When it's essential to execute several handlers in a specific order."
    ],
    takeaways: [
      "Decouples sender and receiver.",
      "Handlers can be added dynamically.",
      "Request can stop at any point in the chain.",
      "No guarantee the request will be handled."
    ],
    code: {
      typescript: `
// 1. Handler Interface
abstract class Approver {
  protected next: Approver | null = null;

  setNext(handler: Approver): Approver {
    this.next = handler;
    return handler; // Returning handler allows chaining
  }

  abstract handleRequest(amount: number): void;
}

// 2. Concrete Handlers
class TeamLead extends Approver {
  handleRequest(amount: number) {
    if (amount <= 1000) {
      console.log(\`✅ TeamLead approved $\${amount}\`);
    } else if (this.next) {
      console.log("TeamLead can't approve. Passing to Manager...");
      this.next.handleRequest(amount);
    }
  }
}

class Manager extends Approver {
  handleRequest(amount: number) {
    if (amount <= 5000) {
      console.log(\`✅ Manager approved $\${amount}\`);
    } else if (this.next) {
      console.log("Manager can't approve. Passing to Director...");
      this.next.handleRequest(amount);
    }
  }
}

class Director extends Approver {
  handleRequest(amount: number) {
    if (amount <= 10000) {
      console.log(\`✅ Director approved $\${amount}\`);
    } else {
      console.log("❌ Director: Too expensive! Meeting required.");
    }
  }
}

// Usage
const lead = new TeamLead();
const manager = new Manager();
const director = new Director();

// Build Chain: Lead -> Manager -> Director
lead.setNext(manager).setNext(director);

console.log("--- Request 500 ---");
lead.handleRequest(500);

console.log("\\n--- Request 3000 ---");
lead.handleRequest(3000);

console.log("\\n--- Request 20000 ---");
lead.handleRequest(20000);
`,
      python: `
class Approver:
    def __init__(self):
        self.next = None

    def set_next(self, handler):
        self.next = handler
        return handler

    def handle(self, amount):
        if self.next:
            self.next.handle(amount)
        else:
            print("❌ No one could approve.")

class TeamLead(Approver):
    def handle(self, amount):
        if amount <= 1000:
            print(f"✅ Lead approved \${amount}")
        else:
            print("Lead passing...")
            super().handle(amount)

class Manager(Approver):
    def handle(self, amount):
        if amount <= 5000:
            print(f"✅ Manager approved \${amount}")
        else:
            print("Manager passing...")
            super().handle(amount)

# Usage
lead = TeamLead()
manager = Manager()
lead.set_next(manager)

lead.handle(500)
lead.handle(3000)
`,
      cpp: `
#include <iostream>
using namespace std;

class Approver {
protected:
    Approver* next = nullptr;
public:
    void setNext(Approver* n) { next = n; }
    virtual void handle(int amount) {
        if (next) next->handle(amount);
        else cout << "❌ Denied." << endl;
    }
};

class Lead : public Approver {
public:
    void handle(int amount) override {
        if (amount <= 1000) cout << "✅ Lead approved." << endl;
        else Approver::handle(amount);
    }
};

class Manager : public Approver {
public:
    void handle(int amount) override {
        if (amount <= 5000) cout << "✅ Manager approved." << endl;
        else Approver::handle(amount);
    }
};

int main() {
    Lead lead;
    Manager manager;
    lead.setNext(&manager);
    
    lead.handle(500);
    lead.handle(3000);
    return 0;
}
`
    }
  },
  [PatternType.COMMAND]: {
    id: PatternType.COMMAND,
    title: "Command",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.",
    concept: "A Text Editor with Undo/Redo. Every time you type a character or make text bold, the editor doesn't just execute the logic instantly; it wraps that action in a Command object (e.g., 'TypeCommand', 'FormatCommand') and pushes it onto a history stack. When you hit Ctrl+Z (Undo), the editor pops the last command and calls its 'undo()' method to reverse the change. This turns actions into objects.",
    technicalDefinition: "Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.",
    whyUseIt: [
      "When you want to parameterize objects with operations.",
      "When you need to queue operations, schedule their execution, or execute them remotely.",
      "When you need to implement reversible operations (Undo/Redo)."
    ],
    takeaways: [
      "Encapsulates a request as an object.",
      "Enables Undo/Redo functionality.",
      "Decouples invoker from receiver.",
      "Support for logging and queuing requests."
    ],
    code: {
      typescript: `
// 1. Command Interface
interface Command {
  execute(): void;
  undo(): void;
}

// 2. Receiver (The thing doing the work)
class TextEditor {
  private content: string = "";

  addText(text: string) {
    this.content += text;
    console.log(\`Current Content: "\${this.content}"\`);
  }

  deleteText(length: number) {
    this.content = this.content.slice(0, -length);
    console.log(\`Current Content: "\${this.content}"\`);
  }
}

// 3. Concrete Command
class TypeCommand implements Command {
  constructor(private editor: TextEditor, private text: string) {}

  execute() {
    this.editor.addText(this.text);
  }

  undo() {
    console.log(\`Undoing type: "\${this.text}"\`);
    this.editor.deleteText(this.text.length);
  }
}

// 4. Invoker (History Manager)
class CommandHistory {
  private history: Command[] = [];

  executeCommand(cmd: Command) {
    cmd.execute();
    this.history.push(cmd);
  }

  undo() {
    const cmd = this.history.pop();
    if (cmd) cmd.undo();
  }
}

// Usage
const editor = new TextEditor();
const history = new CommandHistory();

history.executeCommand(new TypeCommand(editor, "Hello "));
history.executeCommand(new TypeCommand(editor, "World!"));

console.log("--- Undo ---");
history.undo(); // Removes "World!"
`,
      python: `
# Receiver
class TextEditor:
    def __init__(self):
        self.content = ""
    
    def add(self, text):
        self.content += text
        print(f"Content: {self.content}")
    
    def remove(self, length):
        self.content = self.content[:-length]
        print(f"Content: {self.content}")

# Command
class TypeCommand:
    def __init__(self, editor, text):
        self.editor = editor
        self.text = text
    
    def execute(self):
        self.editor.add(self.text)
    
    def undo(self):
        self.editor.remove(len(self.text))

# Invoker
history = []
editor = TextEditor()

cmd1 = TypeCommand(editor, "Hello")
cmd1.execute()
history.append(cmd1)

cmd2 = TypeCommand(editor, " World")
cmd2.execute()
history.append(cmd2)

print("--- Undo ---")
last = history.pop()
last.undo()
`,
      cpp: `
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class TextEditor {
    string content;
public:
    void add(string t) {
        content += t;
        cout << "Content: " << content << endl;
    }
    void remove(int len) {
        content = content.substr(0, content.length() - len);
        cout << "Content: " << content << endl;
    }
};

class Command {
public:
    virtual void execute() = 0;
    virtual void undo() = 0;
};

class TypeCommand : public Command {
    TextEditor* editor;
    string text;
public:
    TypeCommand(TextEditor* e, string t) : editor(e), text(t) {}
    void execute() override { editor->add(text); }
    void undo() override { editor->remove(text.length()); }
};

int main() {
    TextEditor editor;
    TypeCommand cmd(&editor, "Hello");
    
    cmd.execute();
    cmd.undo();
    
    return 0;
}
`
    }
  },
  [PatternType.INTERPRETER]: {
    id: PatternType.INTERPRETER,
    title: "Interpreter",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.",
    concept: "Translating Morse code. You have a specific set of rules (grammar) where dots and dashes map to letters. The Interpreter pattern defines these rules so a sentence '... --- ...' can be interpreted into 'SOS'. It's about building a mini-language processor.",
    technicalDefinition: "Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.",
    whyUseIt: [
      "When you have a simple grammar to process.",
      "When efficiency is not a critical concern (as it can be slow).",
      "Common in SQL parsers, math expression evaluators, or regex engines."
    ],
    takeaways: [
      "Defines a grammar for a language.",
      "Maps domain rules to classes.",
      "Good for simple languages, bad for complex ones.",
      "Usually implements an 'interpret' method."
    ],
    code: {
      typescript: `
// 1. Expression Interface
interface Expression {
  interpret(): number;
}

// 2. Terminal Expression (Number)
class NumberExpr implements Expression {
  constructor(private value: number) {}
  interpret(): number {
    return this.value;
  }
}

// 3. Non-Terminal Expression (Operation)
class AddExpr implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class SubtractExpr implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

// Usage: Representing "10 + 5 - 2"
// Tree: Minus(Plus(10, 5), 2)

const ten = new NumberExpr(10);
const five = new NumberExpr(5);
const two = new NumberExpr(2);

const tenPlusFive = new AddExpr(ten, five); // 15
const result = new SubtractExpr(tenPlusFive, two); // 15 - 2

console.log(\`Result: \${result.interpret()}\`); // 13
`,
      python: `
class Expression:
    def interpret(self): pass

class Number(Expression):
    def __init__(self, val): self.val = val
    def interpret(self): return self.val

class Add(Expression):
    def __init__(self, left, right):
        self.left = left
        self.right = right
    def interpret(self):
        return self.left.interpret() + self.right.interpret()

# 10 + 5
expr = Add(Number(10), Number(5))
print(expr.interpret())
`,
      cpp: `
#include <iostream>
using namespace std;

class Expression {
public:
    virtual int interpret() = 0;
};

class Number : public Expression {
    int val;
public:
    Number(int v) : val(v) {}
    int interpret() override { return val; }
};

class Add : public Expression {
    Expression *left, *right;
public:
    Add(Expression* l, Expression* r) : left(l), right(r) {}
    int interpret() override { 
        return left->interpret() + right->interpret(); 
    }
};

int main() {
    Number ten(10);
    Number five(5);
    Add sum(&ten, &five);
    cout << sum.interpret() << endl; // 15
    return 0;
}
`
    }
  },
  [PatternType.ITERATOR]: {
    id: PatternType.ITERATOR,
    title: "Iterator",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).",
    concept: "A tour guide. You are at a museum (the Collection). You don't know the layout. The tour guide (Iterator) leads you to the 'next' exhibit, then the 'next', ensuring you see everything without you needing to know the map of the building.",
    technicalDefinition: "Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",
    whyUseIt: [
      "When your collection has a complex data structure under the hood, but you want to hide its complexity from clients.",
      "When you want to reduce duplication of the traversal code across your app.",
      "To traverse different structures in a uniform way."
    ],
    takeaways: [
      "Provides a standard way to traverse collections.",
      "Decouples algorithms from data structures.",
      "Supports different traversal strategies (DFS, BFS).",
      "Single Responsibility Principle."
    ],
    code: {
      typescript: `
// 1. Iterator Interface
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// 2. Collection Interface
interface Aggregator {
  createIterator(): Iterator<string>;
}

// 3. Concrete Collection
class Playlist implements Aggregator {
  private songs: string[] = [];

  addSong(song: string) {
    this.songs.push(song);
  }

  createIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}

// 4. Concrete Iterator
class PlaylistIterator implements Iterator<string> {
  private position: number = 0;

  constructor(private collection: string[]) {}

  hasNext(): boolean {
    return this.position < this.collection.length;
  }

  next(): string {
    const song = this.collection[this.position];
    this.position++;
    return song;
  }
}

// Usage
const myPlaylist = new Playlist();
myPlaylist.addSong("Bohemian Rhapsody");
myPlaylist.addSong("Hotel California");
myPlaylist.addSong("Imagine");

const iterator = myPlaylist.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
`,
      python: `
# Python has built-in iterator support (__iter__ and __next__)

class Playlist:
    def __init__(self):
        self.songs = []
    
    def add(self, song):
        self.songs.append(song)
    
    def __iter__(self):
        return PlaylistIterator(self)

class PlaylistIterator:
    def __init__(self, playlist):
        self._playlist = playlist
        self._index = 0
    
    def __next__(self):
        if self._index < len(self._playlist.songs):
            song = self._playlist.songs[self._index]
            self._index += 1
            return song
        raise StopIteration

# Usage
pl = Playlist()
pl.add("Song A")
pl.add("Song B")

for song in pl:
    print(song)
`,
      cpp: `
#include <iostream>
#include <vector>
using namespace std;

// C++ standard uses begin() and end() with operator overloading
// but here is a manual implementation

class Iterator {
public:
    virtual bool hasNext() = 0;
    virtual string next() = 0;
};

class Playlist {
    vector<string> songs;
public:
    void add(string s) { songs.push_back(s); }
    
    // Simple inner class iterator
    class PlaylistIterator : public Iterator {
        Playlist& pl;
        int index = 0;
    public:
        PlaylistIterator(Playlist& p) : pl(p) {}
        bool hasNext() override { return index < pl.songs.size(); }
        string next() override { return pl.songs[index++]; }
    };

    Iterator* createIterator() {
        return new PlaylistIterator(*this);
    }
};

int main() {
    Playlist pl;
    pl.add("Song 1");
    pl.add("Song 2");
    
    Iterator* it = pl.createIterator();
    while(it->hasNext()) {
        cout << it->next() << endl;
    }
    return 0;
}
`
    }
  },
  [PatternType.MEDIATOR]: {
    id: PatternType.MEDIATOR,
    title: "Mediator",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.",
    concept: "Air Traffic Control. Planes (Components) don't talk to each other to decide who lands first. They talk to the Tower (Mediator). The Tower tells Plane A to wait and Plane B to land. This prevents a chaotic mesh of communication and crashes.",
    technicalDefinition: "Defines an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.",
    whyUseIt: [
      "When it's hard to change some of the classes because they are tightly coupled to a bunch of other classes.",
      "When you can't reuse a component in a different program because it's too dependent on other components."
    ],
    takeaways: [
      "Centralizes communication.",
      "Reduces coupling between components.",
      "Components communicate only with the mediator.",
      "Can become a 'God Object' if not careful."
    ],
    code: {
      typescript: `
interface Mediator {
  notify(sender: object, event: string): void;
}

// Concrete Mediator
class ChatRoom implements Mediator {
  notify(sender: object, event: string): void {
    if (sender instanceof User) {
      console.log(\`[ChatRoom] \${sender.name} says: \${event}\`);
    }
  }
}

// Colleague
class User {
  constructor(public name: string, private mediator: Mediator) {}

  send(message: string) {
    this.mediator.notify(this, message);
  }
}

// Usage
const room = new ChatRoom();
const alice = new User("Alice", room);
const bob = new User("Bob", room);

alice.send("Hi Bob!");
bob.send("Hey Alice!");
`,
      python: `
class ChatRoom:
    def show_message(self, user, message):
        print(f"[{user.name}]: {message}")

class User:
    def __init__(self, name, chat_room):
        self.name = name
        self.chat_room = chat_room
    
    def send(self, msg):
        self.chat_room.show_message(self, msg)

room = ChatRoom()
alice = User("Alice", room)
bob = User("Bob", room)

alice.send("Hello!")
`,
      cpp: `
#include <iostream>
#include <string>
using namespace std;

class Mediator;

class User {
    Mediator* mediator;
    string name;
public:
    User(string n, Mediator* m);
    string getName() { return name; }
    void send(string msg);
};

class Mediator {
public:
    virtual void showMessage(User* user, string msg) = 0;
};

class ChatRoom : public Mediator {
public:
    void showMessage(User* user, string msg) override {
        cout << user->getName() << ": " << msg << endl;
    }
};

// Implementations
User::User(string n, Mediator* m) : name(n), mediator(m) {}
void User::send(string msg) { mediator->showMessage(this, msg); }

int main() {
    ChatRoom room;
    User alice("Alice", &room);
    alice.send("Hello World");
    return 0;
}
`
    }
  },
  [PatternType.MEMENTO]: {
    id: PatternType.MEMENTO,
    title: "Memento",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Lets you save and restore the previous state of an object without revealing the details of its implementation.",
    concept: "Save points in a video game. Before a boss fight, you save your game. The save file (Memento) holds your health, inventory, and location. If you die, you reload the save file to restore that exact state. The game system stores the file but doesn't peek inside it.",
    technicalDefinition: "Without violating encapsulation, captures and externalizes an object's internal state so that the object can be restored to this state later.",
    whyUseIt: [
      "When you want to produce snapshots of the object's state to be able to restore a previous state of the object.",
      "When direct access to the object's fields/getters/setters violates its encapsulation."
    ],
    takeaways: [
      "Captures internal state without breaking encapsulation.",
      "Enables generic Undo/Redo mechanisms.",
      "The 'Caretaker' stores the memento but can't read it.",
      "Can be expensive if state is large."
    ],
    code: {
      typescript: `
// 1. Memento (Stores State)
class GameSave {
  constructor(private level: number, private health: number) {}

  getState() {
    return { level: this.level, health: this.health };
  }
}

// 2. Originator (Creates and Restores Memento)
class Game {
  private level = 1;
  private health = 100;

  play() {
    this.level++;
    this.health -= 10;
    console.log(\`Playing... Level: \${this.level}, Health: \${this.health}\`);
  }

  save(): GameSave {
    console.log("Creating Save Point...");
    return new GameSave(this.level, this.health);
  }

  load(save: GameSave) {
    const state = save.getState();
    this.level = state.level;
    this.health = state.health;
    console.log(\`Game Loaded! Level: \${this.level}, Health: \${this.health}\`);
  }
}

// 3. Caretaker (Manages Saves)
const game = new Game();
game.play(); // Lvl 2
game.play(); // Lvl 3

const saveFile = game.save(); // Save at Lvl 3

game.play(); // Lvl 4
game.play(); // Lvl 5 (Oops, died)

console.log("Restoring...");
game.load(saveFile); // Back to Lvl 3
`,
      python: `
class Memento:
    def __init__(self, state):
        self._state = state
    def get_state(self):
        return self._state

class Originator:
    def __init__(self):
        self._state = ""

    def set(self, state):
        print(f"Setting state to {state}")
        self._state = state

    def save(self):
        return Memento(self._state)

    def restore(self, memento):
        self._state = memento.get_state()
        print(f"Restored to {self._state}")

# Usage
originator = Originator()
originator.set("State 1")
saved = originator.save()
originator.set("State 2")
originator.restore(saved)
`,
      cpp: `
#include <iostream>
#include <string>
using namespace std;

class Memento {
    string state;
public:
    Memento(string s) : state(s) {}
    string getState() { return state; }
};

class Originator {
    string state;
public:
    void setState(string s) {
        state = s;
        cout << "State set to " << state << endl;
    }
    Memento save() { return Memento(state); }
    void restore(Memento m) {
        state = m.getState();
        cout << "Restored to " << state << endl;
    }
};

int main() {
    Originator org;
    org.setState("Level 1");
    Memento save = org.save();
    
    org.setState("Level 2");
    org.restore(save);
    return 0;
}
`
    }
  },
  [PatternType.OBSERVER]: {
    id: PatternType.OBSERVER,
    title: "Observer Pattern",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Notify multiple objects about events happening to the object they're observing.",
    concept: "Imagine a YouTuber (Subject) and their Subscribers (Observers). When the YouTuber uploads a video, all subscribers get a notification automatically. They don't have to check the channel every 5 minutes.",
    technicalDefinition: "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
    whyUseIt: [
      "When a change to one object requires changing others, and you don't know how many objects need to be changed.",
      "To establish a one-to-many dependency between objects.",
      "To decouple the subject from the observers."
    ],
    takeaways: [
      "Subject maintains a list of observers.",
      "Observers subscribe/unsubscribe dynamically.",
      "Subject notifies all observers on state change.",
      "Promotes loose coupling between components."
    ],
    code: {
      typescript: `
// 1. Observer Interface
interface Observer {
  update(videoTitle: string): void;
}

// 2. Concrete Observer
class Subscriber implements Observer {
  constructor(private name: string) {}
  
  update(videoTitle: string): void {
    console.log(\`\${this.name} got notified: New video '\${videoTitle}' uploaded!\`);
  }
}

// 3. Subject (Observable)
class YouTubeChannel {
  private subscribers: Observer[] = [];

  subscribe(observer: Observer) {
    this.subscribers.push(observer);
    console.log("New subscriber added.");
  }

  unsubscribe(observer: Observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  uploadVideo(title: string) {
    console.log(\`Uploading video: \${title}...\`);
    this.notifySubscribers(title);
  }

  private notifySubscribers(title: string) {
    this.subscribers.forEach(sub => sub.update(title));
  }
}

// Usage
const channel = new YouTubeChannel();
const bob = new Subscriber("Bob");
const alice = new Subscriber("Alice");

channel.subscribe(bob);
channel.subscribe(alice);

channel.uploadVideo("Design Patterns Course");
// Both Bob and Alice get notified
`,
      python: `
class Subscriber:
    def __init__(self, name):
        self.name = name
    def update(self, message):
        print(f"{self.name} received: {message}")

class Channel:
    def __init__(self):
        self.subs = []
    
    def subscribe(self, sub):
        self.subs.append(sub)
    
    def notify(self, msg):
        for sub in self.subs:
            sub.update(msg)

channel = Channel()
channel.subscribe(Subscriber("Alice"))
channel.subscribe(Subscriber("Bob"))

channel.notify("New Video Uploaded!")
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Observer {
public:
    virtual void update(string msg) = 0;
};

class Subscriber : public Observer {
    string name;
public:
    Subscriber(string n) : name(n) {}
    void update(string msg) override {
        cout << name << " got: " << msg << endl;
    }
};

class Channel {
    vector<Observer*> subs;
public:
    void subscribe(Observer* o) { subs.push_back(o); }
    void notify(string msg) {
        for(auto s : subs) s->update(msg);
    }
};

int main() {
    Channel ch;
    Subscriber s1("Alice");
    Subscriber s2("Bob");
    
    ch.subscribe(&s1);
    ch.subscribe(&s2);
    
    ch.notify("New Video!");
    return 0;
}
`
    }
  },
  [PatternType.STATE]: {
    id: PatternType.STATE,
    title: "State",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.",
    concept: "Your smartphone. When it's 'Unlocked', pressing the volume button changes the ringer volume. When it's 'Locked', pressing the volume button might light up the screen or do nothing. The phone is the same object, but its behavior changes completely based on its current state.",
    technicalDefinition: "Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.",
    whyUseIt: [
      "When you have an object that behaves differently depending on its current state.",
      "When you have a massive switch-case statement based on state variables.",
      "To avoid polluted code with state-dependent conditionals."
    ],
    takeaways: [
      "Encapsulates state-specific behavior in classes.",
      "Context delegates work to the current state object.",
      "States can trigger transitions to other states.",
      "Eliminates large conditional logic."
    ],
    code: {
      typescript: `
// 1. State Interface
interface State {
  pressPlay(player: AudioPlayer): void;
}

// 2. Context
class AudioPlayer {
  private state: State;

  constructor() {
    this.state = new StoppedState(); // Initial State
  }

  setState(state: State) {
    this.state = state;
    console.log(\`State changed to: \${state.constructor.name}\`);
  }

  pressPlay() {
    this.state.pressPlay(this);
  }
}

// 3. Concrete States
class StoppedState implements State {
  pressPlay(player: AudioPlayer) {
    console.log("Starting playback...");
    player.setState(new PlayingState());
  }
}

class PlayingState implements State {
  pressPlay(player: AudioPlayer) {
    console.log("Pausing playback...");
    player.setState(new PausedState());
  }
}

class PausedState implements State {
  pressPlay(player: AudioPlayer) {
    console.log("Resuming playback...");
    player.setState(new PlayingState());
  }
}

// Usage
const player = new AudioPlayer();
player.pressPlay(); // Starts Playing
player.pressPlay(); // Pauses
player.pressPlay(); // Resumes
`,
      python: `
class State:
    def press_play(self, player): pass

class StoppedState(State):
    def press_play(self, player):
        print("Starting...")
        player.state = PlayingState()

class PlayingState(State):
    def press_play(self, player):
        print("Pausing...")
        player.state = PausedState()

class PausedState(State):
    def press_play(self, player):
        print("Resuming...")
        player.state = PlayingState()

class Player:
    def __init__(self):
        self.state = StoppedState()
    
    def press_button(self):
        self.state.press_play(self)

p = Player()
p.press_button() # Start
p.press_button() # Pause
`,
      cpp: `
#include <iostream>
using namespace std;

class Player; // Forward declaration

class State {
public:
    virtual void pressPlay(Player* p) = 0;
};

class PlayingState;
class PausedState;

class StoppedState : public State {
public:
    void pressPlay(Player* p);
};

class Player {
public:
    State* state;
    Player();
    void pressButton() { state->pressPlay(this); }
    void setState(State* s) { state = s; }
};

// Implementations needed outside class due to circular dependency in C++
// Simplified for this view: In C++, these would be separated into .cpp files
`
    }
  },
  [PatternType.STRATEGY]: {
    id: PatternType.STRATEGY,
    title: "Strategy Pattern",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Define a family of algorithms, put each in a separate class, and make their objects interchangeable.",
    concept: "Navigation App. The app can calculate a route from A to B. It can use different algorithms (strategies) depending on the transport mode: Driving, Walking, or Public Transport. The 'Navigator' class delegates the calculation to the specific strategy selected by the user. The destination is the same, but the path, time, and cost differ.",
    analogy: "Getting to the airport. You can take a taxi (RoadStrategy), take a bus (PublicTransportStrategy), or walk (WalkingStrategy). The goal is the same, but the strategy defines the trade-offs (Speed vs. Cost vs. Effort).",
    technicalDefinition: "Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",
    whyUseIt: [
      "When you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime.",
      "To isolate the business logic of a class from the implementation details of algorithms.",
      "To avoid massive switch/if-else statements."
    ],
    takeaways: [
      "Encapsulate algorithms into separate classes.",
      "Context class uses a Strategy interface.",
      "Strategies can be swapped at runtime.",
      "Follows the Open/Closed Principle."
    ],
    code: {
      typescript: `
// 1. Strategy Interface
interface RouteStrategy {
  calculate(a: string, b: string): void;
}

// 2. Concrete Strategies
class CarStrategy implements RouteStrategy {
  calculate(a: string, b: string) { 
    console.log(\`🚗 Calculating driving route from \${a} to \${b}. (Fastest)\`); 
  }
}

class WalkStrategy implements RouteStrategy {
  calculate(a: string, b: string) { 
    console.log(\`🚶 Calculating walking route from \${a} to \${b}. (Scenic)\`); 
  }
}

class BusStrategy implements RouteStrategy {
  calculate(a: string, b: string) { 
    console.log(\`🚌 Calculating bus route from \${a} to \${b}. (Cheapest)\`); 
  }
}

// 3. Context
class Navigator {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(s: RouteStrategy) { 
    this.strategy = s; 
  }
  
  buildRoute(a: string, b: string) {
    this.strategy.calculate(a, b);
  }
}

// Usage
const nav = new Navigator(new CarStrategy());
nav.buildRoute("Home", "Work"); // Car

nav.setStrategy(new WalkStrategy());
nav.buildRoute("Home", "Park"); // Walk
`,
      python: `
class Strategy:
    def calculate(self, a, b): pass

class Car(Strategy):
    def calculate(self, a, b): print("🚗 Driving route")

class Walk(Strategy):
    def calculate(self, a, b): print("🚶 Walking route")

class Navigator:
    def __init__(self, strategy):
        self.strategy = strategy
    
    def set_strategy(self, strategy):
        self.strategy = strategy
    
    def build_route(self, a, b):
        self.strategy.calculate(a, b)

nav = Navigator(Car())
nav.build_route("A", "B")
nav.set_strategy(Walk())
nav.build_route("A", "B")
`,
      cpp: `
#include <iostream>
using namespace std;

class Strategy {
public:
    virtual void calculate() = 0;
};

class Car : public Strategy {
    void calculate() override { cout << "🚗 Driving route" << endl; }
};

class Walk : public Strategy {
    void calculate() override { cout << "🚶 Walking route" << endl; }
};

class Navigator {
    Strategy* strategy;
public:
    Navigator(Strategy* s) : strategy(s) {}
    void setStrategy(Strategy* s) { strategy = s; }
    void buildRoute() { strategy->calculate(); }
};

int main() {
    Car car;
    Walk walk;
    
    Navigator nav(&car);
    nav.buildRoute();
    
    nav.setStrategy(&walk);
    nav.buildRoute();
    return 0;
}
`
    }
  },
  [PatternType.TEMPLATE_METHOD]: {
    id: PatternType.TEMPLATE_METHOD,
    title: "Template Method",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.",
    concept: "Making Tea or Coffee. The general steps are the same: 1. Boil Water, 2. Brew, 3. Pour in Cup, 4. Add Condiments. A 'Beverage' class defines this flow. 'Tea' subclasses provide specific brewing (steeping) and condiments (lemon). 'Coffee' subclasses provide dripping and sugar/milk. The structure remains identical.",
    technicalDefinition: "Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.",
    whyUseIt: [
      "When you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure.",
      "When you have several classes that contain almost identical algorithms with some minor differences."
    ],
    takeaways: [
      "Defines the algorithm structure in a base class.",
      "Subclasses implement specific steps.",
      "Avoids code duplication.",
      "Controls the extension points of the algorithm."
    ],
    code: {
      typescript: `
// 1. Abstract Base Class
abstract class HotBeverage {
  // The Template Method (Final - shouldn't be overridden usually)
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  // Common steps
  boilWater() { console.log("🔥 Boiling water"); }
  pourInCup() { console.log("🍶 Pouring into cup"); }
  
  // Abstract steps (Subclasses MUST implement)
  abstract brew(): void;
  abstract addCondiments(): void;
}

// 2. Concrete Classes
class Tea extends HotBeverage {
  brew() { console.log("🍃 Steeping the tea"); }
  addCondiments() { console.log("🍋 Adding Lemon"); }
}

class Coffee extends HotBeverage {
  brew() { console.log("☕ Dripping Coffee through filter"); }
  addCondiments() { console.log("🍬 Adding Sugar and Milk"); }
}

// Usage
console.log("--- Making Tea ---");
const tea = new Tea();
tea.prepareRecipe();

console.log("\\n--- Making Coffee ---");
const coffee = new Coffee();
coffee.prepareRecipe();
`,
      python: `
from abc import ABC, abstractmethod

class HotBeverage(ABC):
    def prepare_recipe(self):
        self.boil()
        self.brew()
        self.pour()
        self.add_condiments()
    
    def boil(self): print("🔥 Boiling water")
    def pour(self): print("🍶 Pouring into cup")
    
    @abstractmethod
    def brew(self): pass
    
    @abstractmethod
    def add_condiments(self): pass

class Tea(HotBeverage):
    def brew(self): print("🍃 Steeping tea")
    def add_condiments(self): print("🍋 Adding Lemon")

class Coffee(HotBeverage):
    def brew(self): print("☕ Dripping coffee")
    def add_condiments(self): print("🍬 Adding Sugar")

tea = Tea()
tea.prepare_recipe()
`,
      cpp: `
#include <iostream>
using namespace std;

class HotBeverage {
public:
    void prepareRecipe() {
        boil();
        brew();
        pour();
        addCondiments();
    }
    void boil() { cout << "🔥 Boiling water" << endl; }
    void pour() { cout << "🍶 Pouring into cup" << endl; }
    virtual void brew() = 0;
    virtual void addCondiments() = 0;
};

class Tea : public HotBeverage {
    void brew() override { cout << "🍃 Steeping tea" << endl; }
    void addCondiments() override { cout << "🍋 Adding Lemon" << endl; }
};

int main() {
    Tea tea;
    tea.prepareRecipe();
    return 0;
}
`
    }
  },
  [PatternType.VISITOR]: {
    id: PatternType.VISITOR,
    title: "Visitor",
    category: PatternCategory.BEHAVIORAL,
    shortDescription: "Lets you separate algorithms from the objects on which they operate.",
    concept: "A Zoo. You have different animals (Lion, Dolphin). You want to perform different operations like 'Health Check' (by a Vet) or 'Feed' (by a Feeder). Instead of adding `checkHealth()` and `feed()` methods to the Animal classes (polluting them), you create `VetVisitor` and `FeederVisitor`. The Visitor knows how to handle each animal type.",
    technicalDefinition: "Represents an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.",
    whyUseIt: [
      "When you need to perform an operation on all elements of a complex object structure (e.g., an object tree).",
      "When you want to clean up the business logic of auxiliary behaviors.",
      "When a behavior makes sense only for some classes of a class hierarchy."
    ],
    takeaways: [
      "Separates algorithm from object structure.",
      "Adds new operations without changing object classes.",
      "Uses 'Double Dispatch'.",
      "Good for complex data structures like trees/graphs."
    ],
    code: {
      typescript: `
// 1. Element Interfaces
interface Animal {
  accept(visitor: Visitor): void;
}

// 2. Concrete Elements
class Lion implements Animal {
  accept(visitor: Visitor) {
    // Double dispatch: calls specific visitLion method
    visitor.visitLion(this);
  }
  roar() { console.log("Lion: Roar!"); }
}

class Dolphin implements Animal {
  accept(visitor: Visitor) {
    visitor.visitDolphin(this);
  }
  swim() { console.log("Dolphin: Swimming..."); }
}

// 3. Visitor Interface
interface Visitor {
  visitLion(lion: Lion): void;
  visitDolphin(dolphin: Dolphin): void;
}

// 4. Concrete Visitors
class Vet implements Visitor {
  visitLion(lion: Lion) {
    console.log("👨‍⚕️ Vet: Checking Lion's teeth.");
    lion.roar();
  }
  visitDolphin(dolphin: Dolphin) {
    console.log("👨‍⚕️ Vet: Checking Dolphin's fins.");
    dolphin.swim();
  }
}

class Feeder implements Visitor {
  visitLion(lion: Lion) {
    console.log("🥩 Feeder: Giving steak to Lion.");
  }
  visitDolphin(dolphin: Dolphin) {
    console.log("🐟 Feeder: Giving fish to Dolphin.");
  }
}

// Usage
const zoo: Animal[] = [new Lion(), new Dolphin()];
const vet = new Vet();
const feeder = new Feeder();

console.log("--- Vet Visit ---");
zoo.forEach(animal => animal.accept(vet));

console.log("\\n--- Feeding Time ---");
zoo.forEach(animal => animal.accept(feeder));
`,
      python: `
class Lion:
    def accept(self, visitor):
        visitor.visit_lion(self)

class Dolphin:
    def accept(self, visitor):
        visitor.visit_dolphin(self)

class Vet:
    def visit_lion(self, lion):
        print("👨‍⚕️ Vet: Checking Lion.")
    def visit_dolphin(self, dolphin):
        print("👨‍⚕️ Vet: Checking Dolphin.")

class Feeder:
    def visit_lion(self, lion):
        print("🥩 Feeder: Feeding Lion.")
    def visit_dolphin(self, dolphin):
        print("🐟 Feeder: Feeding Dolphin.")

# Usage
zoo = [Lion(), Dolphin()]
vet = Vet()
feeder = Feeder()

print("--- Vet ---")
for a in zoo: a.accept(vet)

print("--- Feeder ---")
for a in zoo: a.accept(feeder)
`,
      cpp: `
#include <iostream>
#include <vector>
using namespace std;

class Lion;
class Dolphin;

class Visitor {
public:
    virtual void visitLion(Lion* l) = 0;
    virtual void visitDolphin(Dolphin* d) = 0;
};

class Animal {
public:
    virtual void accept(Visitor* v) = 0;
};

class Lion : public Animal {
public:
    void accept(Visitor* v) override { v->visitLion(this); }
    void roar() { cout << "Roar!" << endl; }
};

class Dolphin : public Animal {
public:
    void accept(Visitor* v) override { v->visitDolphin(this); }
};

class Vet : public Visitor {
public:
    void visitLion(Lion* l) override { 
        cout << "Vet: Checking Lion. "; 
        l->roar();
    }
    void visitDolphin(Dolphin* d) override { 
        cout << "Vet: Checking Dolphin." << endl; 
    }
};

int main() {
    Lion l;
    Dolphin d;
    Vet v;
    
    l.accept(&v);
    d.accept(&v);
    return 0;
}
`
    }
  },

  // ==================== SOLID PRINCIPLES ====================
  [PatternType.SRP]: {
    id: PatternType.SRP,
    title: "Single Responsibility Principle (SRP)",
    category: PatternCategory.SOLID_PRINCIPLES,
    shortDescription: "A class should have one, and only one, reason to change.",
    concept: "A Swiss Army Knife vs. A Chef's Knife. A Swiss Army Knife tries to do everything (cut, screw, saw, open cans) but does none of them perfectly. A Chef's Knife does one thing: cut food, and it does it exceptionally well. In code, if a class handles User Authentication AND Sending Emails, changing the email provider might break the login logic.",
    technicalDefinition: "A module should be responsible to one, and only one, actor. This principle states that a class should gather together things that change for the same reason, and separate things that change for different reasons.",
    whyUseIt: [
      "To lower coupling between classes.",
      "To make classes easier to understand and maintain.",
      "To reduce the risk of side effects when changing code."
    ],
    takeaways: [
      "One class = One job.",
      "High cohesion, low coupling.",
      "Easier testing and maintenance.",
      "Avoid 'God Objects'."
    ]
  },
  [PatternType.OCP]: {
    id: PatternType.OCP,
    title: "Open/Closed Principle (OCP)",
    category: PatternCategory.SOLID_PRINCIPLES,
    shortDescription: "Software entities should be open for extension, but closed for modification.",
    concept: "Extension cords and Power Strips. The wall outlet is 'closed' for modification (you don't drill into the wall to add more sockets). However, it is 'open' for extension because you can plug in a power strip to add more devices. You extend the functionality without changing the core infrastructure.",
    technicalDefinition: "Software artifacts should be open for extension but closed for modification. This means functionality can be added without changing existing source code, typically achieved through polymorphism and interfaces.",
    whyUseIt: [
      "To prevent breaking existing code when adding new features.",
      "To create flexible and scalable systems.",
      "To allow third-party extensions."
    ],
    takeaways: [
      "Extend functionality via inheritance or interfaces.",
      "Don't modify existing, tested code.",
      "Use polymorphism to switch behaviors.",
      "Key for plugin architectures."
    ]
  },
  [PatternType.LSP]: {
    id: PatternType.LSP,
    title: "Liskov Substitution Principle (LSP)",
    category: PatternCategory.SOLID_PRINCIPLES,
    shortDescription: "Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.",
    concept: "The 'Square is a Rectangle' trap. In math, a square is a rectangle. In code, if you have a Rectangle class where you can set width and height independently, and you create a Square subclass that forces them to be equal, you break the parent class's behavior. If code expects to set width=5 and height=10 to get area=50, the Square will give area=100 (10x10). The subclass broke the contract.",
    technicalDefinition: "Subtypes must be substitutable for their base types. If your code works with a 'Vehicle', it should work with a 'Car' or 'Truck' without breaking or needing to check 'is this a Truck?'.",
    whyUseIt: [
      "To ensure inheritance hierarchies are logical and robust.",
      "To prevent unexpected bugs when using polymorphism.",
      "To keep code verifiable."
    ],
    takeaways: [
      "Subclasses must honor the contract of the superclass.",
      "Don't throw exceptions for expected methods.",
      "Derived classes should extend, not replace.",
      "Beware of empty method overrides."
    ]
  },
  [PatternType.ISP]: {
    id: PatternType.ISP,
    title: "Interface Segregation Principle (ISP)",
    category: PatternCategory.SOLID_PRINCIPLES,
    shortDescription: "Clients should not be forced to depend upon interfaces that they do not use.",
    concept: "A giant office printer vs a simple desktop printer. If you have an interface 'IMachine' with 'print()', 'scan()', and 'fax()', a simple printer is forced to implement 'scan' and 'fax' even if it can't do them. It's better to split them into 'IPrinter', 'IScanner', 'IFax'.",
    technicalDefinition: "Clients should not be forced to depend upon interfaces that they do not use. This principle suggests splitting large interfaces into smaller, more specific ones so that clients only need to know about the methods that are of interest to them.",
    whyUseIt: [
      "To avoid 'fat' interfaces.",
      "To prevent classes from implementing dummy methods.",
      "To decouple systems."
    ],
    takeaways: [
      "Split large interfaces into smaller ones.",
      "Role Interfaces > Header Interfaces.",
      "Clients only know about methods they use.",
      "Reduces impact of changes."
    ]
  },
  [PatternType.DIP]: {
    id: PatternType.DIP,
    title: "Dependency Inversion Principle (DIP)",
    category: PatternCategory.SOLID_PRINCIPLES,
    shortDescription: "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
    concept: "A User Service (High Level) needing data. Without DIP, the Service is hardcoded to connect to a specific 'PostgresDatabase' (Low Level). If you want to switch to 'MongoDB', you have to rewrite the Service. With DIP, the Service depends on an 'IDatabase' interface. You can 'inject' Postgres, Mongo, or any other DB that fits the interface without touching the Service code.",
    technicalDefinition: "High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.",
    whyUseIt: [
      "To reduce coupling between modules.",
      "To make code easy to unit test (mocking dependencies).",
      "To allow swapping implementations (e.g., SQL to MongoDB)."
    ],
    takeaways: [
      "Depend on abstractions, not concretions.",
      "Use Dependency Injection.",
      "Invert the flow of control.",
      "Makes systems modular."
    ]
  },

  // ==================== ARCHITECTURE STYLES ====================
  [PatternType.MVC]: {
    id: PatternType.MVC,
    title: "Model-View-Controller (MVC)",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "Separates an application into three main logical components: the Model, the View, and the Controller.",
    concept: "A design pattern that decouples the user interface (View), the data (Model), and the application logic (Controller). The Controller receives user input, manipulates the Model, and the Model updates the View. This separation allows developers to modify each component independently.",
    useCase: "Ruby on Rails, Django, Laravel, and ASP.NET MVC. Commonly used in traditional server-side rendered web applications where the server handles logic (Controller) and data (Model) and sends HTML (View) to the browser.",
    technicalDefinition: "An architectural style that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.",
    whyUseIt: [
      "To organize code for maintainability.",
      "To allow multiple views for the same model.",
      "To separate business logic from UI logic."
    ],
    takeaways: [
      "Model: Data and logic.",
      "View: UI display.",
      "Controller: Handles input and updates Model.",
      "Standard for web frameworks (Rails, Django)."
    ]
  },
  [PatternType.MVVM]: {
    id: PatternType.MVVM,
    title: "Model-View-ViewModel (MVVM)",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "Facilitates a separation of development of the graphical user interface from the development of the business logic or back-end logic.",
    concept: "An evolution of MVC where the 'Controller' is replaced by a 'ViewModel'. The ViewModel exposes streams of data relevant to the View. The critical difference is 'Data Binding'—the View automatically updates when the ViewModel changes, without manual intervention.",
    useCase: "Modern Frontend Frameworks like React (with hooks), Vue.js, Angular, and Desktop frameworks like WPF (Windows Presentation Foundation) or Xamarin Forms. It powers single-page applications (SPAs) where the UI must stay in sync with state.",
    technicalDefinition: "An architectural style where the View binds directly to properties on the ViewModel. The ViewModel exposes data from the Model in a way the View can consume. Unlike MVC, there is no Controller mediating every single update; changes propagate via Data Binding.",
    whyUseIt: [
      "To enable data binding (automatic UI updates).",
      "To separate UI logic from business logic (easier testing).",
      "Common in modern frontend frameworks (React, Vue, Angular)."
    ],
    takeaways: [
      "ViewModel adapts Model for View.",
      "Two-way data binding removes glue code.",
      "View is declarative.",
      "ViewModel doesn't know about the View."
    ]
  },
  [PatternType.MONOLITH]: {
    id: PatternType.MONOLITH,
    title: "Monolithic Architecture",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "A single-tiered software application in which the user interface and data access code are combined into a single program from a single platform.",
    concept: "The traditional way of building applications where all distinct modules (database access, business logic, UI handling) are packaged and deployed as a single, unified unit. If one part breaks, the whole application might crash.",
    useCase: "Early-stage Startups, Simple CRUD Apps, Wordpress sites. Perfect for Minimum Viable Products (MVPs) because it is faster to develop, easier to deploy, and simpler to test when the team and codebase are small.",
    technicalDefinition: "A traditional unified model for the design of a software program. A monolithic application is built as a single unit, where all disparate components (data access, business logic, UI) are tightly coupled and deployed together.",
    whyUseIt: [
      "Simple to develop and deploy initially.",
      "Better performance (no network overhead).",
      "Easy to debug (single process)."
    ],
    takeaways: [
      "Unified codebase.",
      "Single deployment unit.",
      "Harder to scale parts independently.",
      "Tight coupling."
    ]
  },
  [PatternType.MICROSERVICES]: {
    id: PatternType.MICROSERVICES,
    title: "Microservices Architecture",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "An architectural style that structures an application as a collection of services that are highly maintainable and testable, loosely coupled, independently deployable, and organized around business capabilities.",
    concept: "Decomposing a massive application into a suite of small services, each running in its own process and communicating with lightweight mechanisms (often HTTP). Each service is built around a specific business capability and is independently deployable.",
    useCase: "Netflix, Amazon, Uber, Spotify. Used by large-scale organizations with complex domains and large teams. It allows different teams to own different services (e.g., 'Payment Team', 'Recommendation Team') and deploy them independently.",
    technicalDefinition: "An architectural style where an application is structured as a collection of small, autonomous services, modeled around a business domain. Services communicate via lightweight protocols (e.g., HTTP/REST) and are independently deployable.",
    whyUseIt: [
      "To allow independent deployment and scaling of services.",
      "To improve fault isolation (one service crash doesn't kill the system).",
      "To enable using different technologies for different services."
    ],
    takeaways: [
      "Loosely coupled services.",
      "Independently deployable.",
      "Organized around business capabilities.",
      "Introduces complexity (distributed systems)."
    ]
  },
  [PatternType.LAYERED]: {
    id: PatternType.LAYERED,
    title: "Layered (N-Tier) Architecture",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "Organizes code into horizontal layers, where each layer has a specific responsibility and only interacts with the layer directly below it.",
    concept: "Structuring an application into logical layers where requests flow downwards. Typically involves a Presentation Layer (UI), Business Logic Layer (Rules), and Data Access Layer (Database). Lower layers don't know about upper layers.",
    useCase: "Enterprise Java Beans (EJB), Corporate Business Applications, and traditional .NET enterprise apps. Used when security and strict separation of concerns are critical (e.g., banking software where the UI must never touch the database directly).",
    technicalDefinition: "An architectural style that separates an application into logical layers (e.g., Presentation, Business, Data Access), enforcing a strict dependency direction (usually top-down). Each layer has a specific responsibility and abstracts the layer below it.",
    whyUseIt: [
      "Standard for enterprise applications.",
      "Ease of maintenance and testing (separation of concerns).",
      "Security: UI cannot access Database directly."
    ],
    takeaways: [
      "Strict separation of concerns.",
      "Requests flow down, responses flow up.",
      "Easy to replace a layer (e.g., switch UI).",
      "Can introduce latency."
    ]
  },
  [PatternType.EVENT_DRIVEN]: {
    id: PatternType.EVENT_DRIVEN,
    title: "Event-Driven Architecture",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "A software architecture paradigm promoting the production, detection, consumption of, and reaction to events.",
    concept: "A design where services communicate by emitting 'events' (facts that happened) asynchronously, rather than calling each other directly. Producers don't know who is listening, and Consumers react to events as they arrive.",
    useCase: "Stock Trading Platforms, IoT Systems (Smart Homes), Real-time Analytics (Clickstream tracking). Used wherever immediate responsiveness and high scalability are required, handling millions of events asynchronously.",
    technicalDefinition: "An architectural style promoting the production, detection, consumption of, and reaction to events. Decoupled services communicate asynchronously via an Event Bus or Message Broker, rather than direct request/response calls.",
    whyUseIt: [
      "To decouple services (Producers don't know Consumers).",
      "For asynchronous processing and high scalability.",
      "Real-time applications."
    ],
    takeaways: [
      "Decoupled components.",
      "Asynchronous communication.",
      "Highly scalable.",
      "Event Bus / Message Broker is central."
    ]
  },
  [PatternType.DDD]: {
    id: PatternType.DDD,
    title: "Domain-Driven Design (DDD)",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "An approach to software development that centers the design on the domain logic of the application.",
    concept: "A methodology where the code structure and language closely match the real-world business domain. It emphasizes splitting complex domains into 'Bounded Contexts' where models are valid and consistent.",
    useCase: "Complex Enterprise Systems with intricate business rules, such as Insurance Policy Management, Logistics & Shipping Routing, or Core Banking Systems. It helps developers and domain experts speak the same language.",
    technicalDefinition: "An architectural style and software development approach that focuses on modeling the software to match a domain according to input from that domain's experts. It heavily uses concepts like Ubiquitous Language, Bounded Contexts, Entities, Value Objects, and Aggregates.",
    whyUseIt: [
      "For complex systems where business logic is intricate.",
      "To ensure developers and business experts speak the same language.",
      "To organize code around business boundaries rather than technical layers."
    ],
    takeaways: [
      "Focus on Core Domain.",
      "Ubiquitous Language (Common vocabulary).",
      "Bounded Contexts (Clear boundaries).",
      "Model-driven design."
    ]
  },
  [PatternType.SAGA]: {
    id: PatternType.SAGA,
    title: "Saga Pattern",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "A sequence of local transactions where each transaction updates data within a single service.",
    concept: "A way to handle long-running transactions in distributed systems (like Microservices). Since you can't lock multiple databases at once, you execute a series of local steps. If one fails, you execute 'compensating transactions' to undo the previous steps.",
    useCase: "Travel Booking Systems (Flight + Hotel + Car), E-commerce Order Fulfillment (Inventory -> Payment -> Shipping). Used when a transaction spans multiple microservices and cannot use standard database ACID locks.",
    technicalDefinition: "An architectural style for managing distributed transactions. A Saga is a sequence of local transactions. Each local transaction updates the database and publishes a message or event to trigger the next local transaction in the saga. If a local transaction fails, the saga executes compensating transactions that undo the changes that were made by the preceding local transactions.",
    whyUseIt: [
      "To maintain data consistency across distributed services (Microservices).",
      "When you cannot use standard ACID transactions (2PC) across multiple databases.",
      "To handle long-running business processes."
    ],
    takeaways: [
      "Manages distributed transactions.",
      "Uses Compensating Transactions for rollback.",
      "Can be Choreography-based (Events) or Orchestration-based (Central Coordinator).",
      "Eventually Consistent."
    ]
  },
  [PatternType.SERVERLESS]: {
    id: PatternType.SERVERLESS,
    title: "Serverless Architecture",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "A cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources.",
    concept: "An execution model where the cloud provider (AWS, Azure) dynamically manages the allocation of machine resources. Code runs in stateless containers that are event-triggered and ephemeral (they disappear after use).",
    useCase: "Image Processing Pipelines (User uploads photo -> resize function runs), Cron Jobs, Chatbots, and sporadic API workloads. Ideal for tasks that run infrequently or need to scale from zero to thousands instantly without managing servers.",
    technicalDefinition: "An architectural style where the application logic is executed in stateless compute containers (FaaS - Functions as a Service) that are event-triggered and ephemeral. The cloud provider fully manages the infrastructure, scaling, and provisioning.",
    whyUseIt: [
      "To reduce operational cost (Pay-per-use).",
      "To eliminate infrastructure management.",
      "For automatic scaling from zero to infinity."
    ],
    takeaways: [
      "No server management.",
      "Event-driven execution.",
      "Pay only for execution time.",
      "Stateless functions (FaaS)."
    ]
  },
  [PatternType.CLIENT_SERVER]: {
    id: PatternType.CLIENT_SERVER,
    title: "Client-Server Architecture",
    category: PatternCategory.ARCHITECTURE_STYLES,
    shortDescription: "A distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.",
    concept: "A centralized architecture where multiple 'Clients' (end-user devices) request resources or services from a central 'Server'. The Server manages security, data, and logic, while the Client handles presentation.",
    useCase: "The World Wide Web (Browsers requesting pages), Email Systems (Outlook connecting to Exchange), Online Banking, Multiplayer Games. It is the foundational model of the internet.",
    technicalDefinition: "An architectural style where the system is divided into two distinct parts: Clients (requesters) and Servers (providers). Clients initiate communication sessions with servers which await incoming requests. It is the foundational architecture of the Web (Browser = Client, Web Server = Server).",
    whyUseIt: [
      "To centralize data and security on the server.",
      "To allow many users to access the same resources.",
      "To separate the user interface (Client) from data management (Server)."
    ],
    takeaways: [
      "Centralized control and data.",
      "Request-Response model.",
      "Scalability (Vertical or Horizontal).",
      "Foundation of the Internet (HTTP)."
    ]
  }
};