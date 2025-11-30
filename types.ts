export enum SectionType {
  DESIGN_PATTERNS = 'design_patterns',
  SOLID = 'solid',
  ARCHITECTURE = 'architecture'
}

export enum PatternType {
  // Creational
  FACTORY = 'factory',
  ABSTRACT_FACTORY = 'abstract_factory',
  BUILDER = 'builder',
  PROTOTYPE = 'prototype',
  SINGLETON = 'singleton',

  // Structural
  ADAPTER = 'adapter',
  BRIDGE = 'bridge',
  COMPOSITE = 'composite',
  DECORATOR = 'decorator',
  FACADE = 'facade',
  FLYWEIGHT = 'flyweight',
  PROXY = 'proxy',

  // Behavioral
  CHAIN_OF_RESPONSIBILITY = 'chain_of_responsibility',
  COMMAND = 'command',
  INTERPRETER = 'interpreter',
  ITERATOR = 'iterator',
  MEDIATOR = 'mediator',
  MEMENTO = 'memento',
  OBSERVER = 'observer',
  STATE = 'state',
  STRATEGY = 'strategy',
  TEMPLATE_METHOD = 'template_method',
  VISITOR = 'visitor',

  // SOLID
  SRP = 'srp',
  OCP = 'ocp',
  LSP = 'lsp',
  ISP = 'isp',
  DIP = 'dip',

  // Architecture
  MVC = 'mvc',
  MVVM = 'mvvm',
  MONOLITH = 'monolith',
  MICROSERVICES = 'microservices',
  LAYERED = 'layered',
  EVENT_DRIVEN = 'event_driven',
  DDD = 'ddd',
  SAGA = 'saga',
  SERVERLESS = 'serverless',
  CLIENT_SERVER = 'client_server',
}

export enum PatternCategory {
  CREATIONAL = 'Creational',
  STRUCTURAL = 'Structural',
  BEHAVIORAL = 'Behavioral',
  SOLID_PRINCIPLES = 'SOLID Principles',
  ARCHITECTURE_STYLES = 'Architecture Styles',
}

export interface PatternData {
  id: PatternType;
  title: string;
  category: PatternCategory;
  shortDescription: string;
  concept: string;
  analogy?: string;
  useCase?: string;
  technicalDefinition?: string;
  whyUseIt: string[];
  takeaways: string[];
  code?: {
    typescript: string;
    python: string;
    cpp: string;
  };
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface UMLNode {
  id: string;
  label: string;
  type: 'class' | 'interface' | 'abstract';
  x: number;
  y: number;
  methods: string[];
}

export interface UMLEdge {
  from: string;
  to: string;
  type: 'extends' | 'implements' | 'association' | 'dependency' | 'creates';
  label?: string;
  description?: string;
}
